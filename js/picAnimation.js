
const myImgBox = document.querySelector('.profilePhoto .photoBox')

for (let i = 1; i < 4; i++) {
    const myImg = document.createElement('img')
    myImg.setAttribute('src', `./img/img_0${i}.jpg`)
    myImg.style.left = `${(i-1) * 250}px`
    myImg.style.scale = '0'
    myImgBox.appendChild(myImg)
}

gsap.to( $('.photoBox img'), {scale: 1} )
gsap.to( $('.photoBox img:nth-child(2)'), {scale: 1.2, zIndex: 2} )


setInterval(()=>{

    const imgCopy = document.querySelector('.photoBox img:last-child')
    const imgCopyUrl = imgCopy.getAttribute('src')
    
    const appendImg = document.createElement('img')
    appendImg.setAttribute('src', imgCopyUrl)

    const insertTarget = document.querySelector('.profilePhoto .photoBox img:first-child')

    myImgBox.insertBefore(appendImg, insertTarget)

    // gsap.to($('.photoBox'), {
    //     left: 250
    // })

    // gsap.to( $('.photoBox img:nth-child(2)'), {scale: 1, zIndex: 1} )

}, 1000)

const i = document.querySelector('.profilePhoto .photoBox img:nth-child(2)')

