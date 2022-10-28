const openTab=(id,index)=>{
    const tab = document.getElementById(id) 
    const tabs = document.querySelectorAll('.tab')
    const tabButtons = document.querySelectorAll('.tabsHeaderButton') 
    tabs.forEach(item=>item.classList.remove('active'))
    tabButtons.forEach(item=>item.classList.remove('active'))
    tab.classList.add('active')
    tabButtons[index].classList.add('active')
}
const openTab2=(id,index)=>{
    const tab = document.getElementById(id) 
    const tabs = document.querySelectorAll('.tab2')
    const tabButtons = document.querySelectorAll('.tabsHeaderButton2') 
    tabs.forEach(item=>item.classList.remove('active'))
    tabButtons.forEach(item=>item.classList.remove('active'))
    tab.classList.add('active')
    tabButtons[index].classList.add('active')
}


// cyberRiskTab_c
// complianceTab_c
// thirdPartyTab_c
const openTab3=(id,index)=>{
    console.log("called");
    const wrapper = document.getElementById('three_tabs_wrapper')
    console.log(wrapper);
    const tabButtons = document.querySelectorAll('.tabsHeaderButton3') 
    if (id == 'cyberRiskTab_b' || id == 'engineeringTab_b' || id == 'cyberRiskTab_c') {
        wrapper.style.transform= 'translateX(0%)'
    }
    if (id == 'complianceTab_b') {
        wrapper.style.transform= 'translateX(-33.35%)'
    }
    if (id == "architectureTab_b") {
        wrapper.style.transform= 'translateX(-50.35%)'
    }
    if (id == "complianceTab_c") {
        wrapper.style.transform= 'translateX(-33.3%)'
    }
    if (id == 'thirdPartyTab_b') {
        wrapper.style.transform= 'translateX(-66.5%)'
    }
    if (id == 'thirdPartyTab_c') {
        wrapper.style.transform= 'translateX(-66.6%)'
    }
    tabButtons.forEach(item=>item.classList.remove('active'))
    tabButtons[index].classList.add('active')
}
