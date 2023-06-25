
const myImgBox = document.querySelector('.profilePhoto .photoBox')

for (let i = 1; i < 4; i++) {
    const myImg = document.createElement('img')
    myImg.setAttribute('src', `./img/img_0${i}.jpg`)
    myImg.style.left = `${(i-1) * 250}px`
    myImg.style.scale = '0'
    myImgBox.appendChild(myImg)
}

let clone = myImgBox.children[0]
clone = clone.cloneNode(true)
myImgBox.append(clone)

gsap.to( $('.photoBox img'), {scale: 1, filter: 'brightness(30%)', opacity: 0.8} )
gsap.to( $('.photoBox img:nth-child(3)'), {scale: 1.2, zIndex: 2, filter: 'brightness(100%)', opacity: 1} )


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



    /* 텍스트 */
    gsap.to($('.profileMsg .motto div'), {
        top: 0,
        onComplete: () => {
            gsap.to( $('.profileMsg .motto div') , {top: '-60px', duration:0} )

            let lastMotto = $('.profileMsg .motto div > p:last-child')
            lastMotto = lastMotto.clone()
            $('.profileMsg .motto div').prepend(lastMotto)

            $('.profileMsg .motto div p:last-child').remove()
        }
    })

}

const textMachine = document.querySelector('.profileMsg .motto')
let text = document.createElement('div')
text.style.position = 'absolute'
text.style.width = '100%'
text.style.top = '-60px'
text.innerHTML = `
    <p>무한한 가능성을 가진</p>
    <p>성공할 때까지 도전하는</p>
    <p>한계를 뛰어넘는</p>
`
textMachine.append(text)





setInterval(()=>{
    introAnimate()
}, 2000)






