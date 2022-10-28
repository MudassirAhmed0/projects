var pdfDoc = null,
pageNum= 1,
pageRendering= false,
pageNumPending= null,
// scale=1.5,
scale ;
canvas = document.getElementById('pdf_canvas')
ctx= canvas.getContext('2d')

function renderPage(num,newScale){
    pageRendering = true
    pdfDoc.getPage(num).then(page=>{
        if(!newScale){
            scale = 682/ page.getViewport({scale:1.0}).width

        }
        
        var viewport = page.getViewport({scale});
        canvas.height= viewport.height
        

        var renderContext ={
            canvasContext: ctx,
            viewport
        }
        var renderTask = page.render(renderContext)
        renderTask.promise.then(()=>{
            pageRendering=false;
            if(pageNumPending!==null){
                renderPage(pageNumPending)
                pageNumPending = null
            }
        })
    })
    document.getElementById('pageNum').textContent = num
}


function queueRenderingPage(num){
    if(pageRendering){
        pageNumPending= num
    }else{
        renderPage(num)
    }
}
function onPrevPage (){
    if(pageNum <= 1){
        return
    }
     pageNum--;
        queueRenderingPage(pageNum)
}
document.getElementById('prev').addEventListener('click',onPrevPage)
function onNextPage(){
    if(pageNum >= pdfDoc.numPages){
        return
    }
     pageNum++;
        queueRenderingPage(pageNum)
}
document.getElementById('next').addEventListener('click',onNextPage)

function zoomOut(){
    scale -=0.1
    renderPage(pageNum,scale)
}
function zoomIn (){
    scale += 0.1
    renderPage(pageNum,scale)
}
    document.getElementById('zoom_out').addEventListener('click',zoomOut)
    document.getElementById('zoom_in').addEventListener('click',zoomIn)
// pdfjsLib.getDocument('./assets/pdf/1.pdf').promise
// .then(doc=>{
//     pdfDoc= doc 
//     // document.getElementById()
//     renderPage(pageNum)
// })
// .catch(err=>{
//     console.log(err)
// })
const handlePDF=(selected)=>{
    let msg = document.querySelector('#pdfMessage')
    let container = document.querySelector('#pdfContainer')
    msg.classList.add('hidden')
    container.classList.remove('hidden')
    const listItems = document.querySelectorAll('.customScroll li')
    listItems.forEach(item=>{
        item.classList.remove('text-gold')
        item.classList.add('text-[#868786b3]')
    })
    
    selected.classList.remove('text-[#868786b3]')
    selected.classList.add('text-gold')
    let  newUrl = selected.id
            pdfjsLib.getDocument(`./assets/pdf/${newUrl}.pdf`).promise
        .then(doc=>{
            pdfDoc= doc 
            // document.getElementById()
            renderPage(pageNum)
        })
        .catch(err=>{
            console.log(err)
        })
}