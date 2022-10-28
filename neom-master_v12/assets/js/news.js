const readMore  =()=>{
     
    const container = document.querySelector('.other-blogs-main-div')
    

     for(i= 0; i<6 ; i++){ 
         setTimeout(()=>{
            const card = document.createElement('div')
            card.setAttribute('data-aos-once','true')
            card.setAttribute('data-aos','fade-in')
            card.setAttribute('data-aos-duration',"700")
            card.setAttribute('class',"blog-card rounded-[25px] lg:w-[31.7%] md:w-[48%] sm:w-[100%] w-[100%] mb-[42px] overflow-hidden relative group")
       
            const innerHtml= `<img src="./assets/images/news/NEOMlaunchesinfrastructurework fortheworld'sSTC1.jpg"
                class="rounded-[25px] object-cover w-[100%] h-[529px] transition duration-500 group-hover:scale-[1.13]" />
            <div
                class="overlay absolute flex flex-col justify-end bottom-0 h-[100%] w-[100%] p-[30px]          bg-gradient-to-t from-black">
                <a href="./single-news.html" class="absolute top-0 left-0 w-full h-full" ></a>
                <div class="text-[#fff]">
                    <p class="brown-light">October 26, 2021</p>
                    <h6 class="brown-light pt-[10px] pb-[25px] text-[22px]">NEOM launches infrastructure work
                        for the world's STC</h6>
                    <a class="brown-light text-[16px] tracking-[3px] text-[#C19333] uppercase cursor-pointer">Read More <img src="./assets/images/svg/chevron-right.svg" class="inline mt-[-3px]" /></a>
                </div>
            </div>`
            card.innerHTML=innerHtml
             container.appendChild(card)

         },500)
     }
}