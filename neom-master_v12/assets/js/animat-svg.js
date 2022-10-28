let neomShield = document.querySelector('.neom-shield')

window.addEventListener('scroll', scrolled)

function scrolled() {
    if(scrollY > neomShield.offsetTop - 200) {
        neomShield.classList.add('animat-neom-shield')
    }
}