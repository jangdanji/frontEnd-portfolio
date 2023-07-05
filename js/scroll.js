const header = document.querySelector('.header ul')
const headerMenus = document.querySelectorAll('.header ul li')

window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop || window.pageYOffset

    if (scrollTop > 0) header.style.opacity = '0.5'
    else header.style.opacity = '1'

    const introSection = document.querySelector('section.intro').scrollTop
    const profileSection = document.querySelector('section.profile').scrollTop
    const projectSection = document.querySelector('section.project').scrollTop
    const contactSection = document.querySelector('section.contact').scrollTop

    // function reset() {
    //     headerMenus.forEach((menu) => {

    //     })
    // }
        

    if (scrollTop > introSection)
        headerMenus[0].classList.add('active')

})

header.addEventListener('mouseover', () => header.style.opacity = 1)
header.addEventListener('mouseout', () => header.style.opacity = 0.5)