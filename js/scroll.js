const header = document.querySelector('.header ul')
const headerMenus = document.querySelectorAll('.header ul li')
const sections = document.querySelectorAll('.container > section')

const profileSection = $('section.profile').scrollTop()
// console.log(profileSection)

window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop



    if (scrollTop > 0) header.style.opacity = '0.5'
    else header.style.opacity = '1'

    const introSection = document.querySelector('section.intro').scrollTop
    
    const profileSection = document.querySelector('section.profile')
    // const projectSection = document.querySelector('section.project').scrollTop
    // const contactSection = document.querySelector('section.contact').scrollTop

    // console.log(profileSection.scrollTop)

    // function reset() {
    //     headerMenus.forEach((menu) => {

    //     })
    // }
        

    // if (scrollTop > introSection)
    //     headerMenus[0].classList.add('active')

})

header.addEventListener('mouseover', () => header.style.opacity = 1)
header.addEventListener('mouseout', () => header.style.opacity = 0.5)

headerMenus.forEach((menu, index) => {
    menu.addEventListener('click', function(){
        let arrival = sections[index]
        arrival.scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
    })
})
