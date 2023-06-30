const _ = require('lodash');

const profilePhoto = document.querySelector('.profilePhoto')
const myImgBox = document.querySelector('.profilePhoto .photoBox')

/* 이미지 슬라이드에 이미지 삽입 */
for (let i = 1; i < 4; i++) {
    const myImg = document.createElement('img')
    myImg.setAttribute('src', `./img/img_0${i}.jpg`)
    myImg.style.left = `${(i-1) * 250}px`
    myImg.style.scale = '0'
    myImgBox.appendChild(myImg)
}

const msgBackWrap = document.querySelector('.photo-back')

/* 메세지 뒷배경에 이미지 삽입 */
for (let i = 1; i < 4; i++) {
    const myImg = document.createElement('img')
    myImg.setAttribute('src', `./img/img_0${i}.jpg`)
    myImg.style.filter = 'blur(25px) brightness(70%)'
    if (i == 3) myImg.classList.add('active')
    msgBackWrap.appendChild(myImg)
}

/* 슬라이드 애니메이션을 위해서 밖으로 하나 추가해놔야됨 */
let clone = myImgBox.children[0]
clone = clone.cloneNode(true)
myImgBox.append(clone)

/* 채워진 dot 만들기 */
const dots = document.querySelectorAll('.dots .fa-circle')

const dotCopyBox = document.createElement('div')
dotCopyBox.classList.add('dots')
dotCopyBox.classList.add('filled')

dots.forEach((dot) => {
    const newDot = dot.cloneNode(true)
    newDot.classList.remove('far')
    newDot.classList.add('fas')
    newDot.style.opacity = '0'
    dotCopyBox.appendChild(newDot)
})

dotCopyBox.children[1].style.opacity = '1' /* 기본값 */
profilePhoto.appendChild(dotCopyBox)

let picIdx = 1 /* 뒷배경 인덱스 */

function introAnimate(){

    /* 사진 */
    gsap.to($('.photoBox'), {
        left: 0, /* 기본 상태는 -200px */
        onComplete: () => {

            gsap.to($('.photoBox'), {left: -200, duration: 0})

            /* 마지막 사진을 remove한 뒤의 마지막 사진을 clone해서 맨 앞에다가 갖다 붙이기 */
            $('.photoBox img:last-child').remove() 
            let lastPic = $('.photoBox img:last-child')
            lastPic = lastPic.clone()
            $('.photoBox').prepend(lastPic)

        }
    })

    gsap.to($('.photoBox img'), {filter: 'brightness(30%)', opacity: 0.8})
    gsap.to($('.photoBox img:nth-child(2)'), {scale: 1.2, zIndex: 3, filter: 'brightness(100%)', opacity: 1}) /* top */
    gsap.to($('.photoBox img:nth-child(3)'), {scale: 1.0, zIndex: 2})

    /* dots */
    const dots = document.querySelector('.dots.filled')
    const filled = dots.querySelector('.fa-circle[style*="opacity: 1"]')
    filled.style.opacity = '0'

    if (filled === dots.lastElementChild) dots.firstElementChild.style.opacity = '1'
    else filled.nextElementSibling.style.opacity = '1'


    /* 텍스트 */
    gsap.to($('.profile-msg .motto div'), {
        top: 0,
        onComplete: () => {
            gsap.to( $('.profile-msg .motto div') , {top: '-60px', duration:0} )

            let lastMotto = $('.profile-msg .motto div > p:last-child')
            lastMotto = lastMotto.clone()
            $('.profile-msg .motto div').prepend(lastMotto)

            $('.profile-msg .motto div p:last-child').remove()
        }
    })

    /* 텍스트 뒷배경 */
    const backImg = document.querySelectorAll('.photo-back img')
    backImg.forEach((img) => img.classList.remove('active'))
    backImg[picIdx].classList.add('active')
    // console.log(picIdx)
    // console.log(backImg[picIdx])

    picIdx--
    if (picIdx < 0) picIdx = 2
    // console.log(picIdx)

}

const textMachine = document.querySelector('.profile-msg .motto')
let text = document.createElement('div')
text.style.position = 'absolute'
text.style.width = '525px'
text.style.top = '-60px'
text.innerHTML = `
    <p>무한한 가능성을 가진 &#127775</p>
    <p>성공할 때까지 도전하는 &#127919</p>
    <p>한계를 뛰어넘는 &#9889;</p>
`
textMachine.append(text)


setTimeout(()=>{

})
gsap.to( $('.photoBox img'), {scale: 1, filter: 'brightness(30%)', opacity: 0.8} )
gsap.to( $('.photoBox img:nth-child(3)'), {scale: 1.2, zIndex: 2, filter: 'brightness(100%)', opacity: 1} )


setInterval(()=>{
    introAnimate()
}, 1500)


// const myImgs = myImgBox.querySelectorAll('img')

// const bgImage = document.querySelector('.introduction .profile-msg')

// const bgImage = document.querySelector('.profile-bg')

// for (let i = 1; i <= 3; i++) {
//     const img = document.createElement('img')
//     img.setAttribute('src', `./img/img_0${i}.jpg`)
//     bgImage.appendChild(img)
// }

// bgImage.style.backdropFilter = 'blur(5px)';
