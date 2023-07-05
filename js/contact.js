const sendBtn = document.querySelector('.contact-box button')

const inputText1 = document.querySelector('.text-area input:nth-child(1)')
const inputText2 = document.querySelector('.text-area input:nth-child(2)')
const inputTextarea = document.querySelector('.text-area textarea')

sendBtn.addEventListener('click', function(){
    alert('감사합니다!')

    inputText1.value = ''
    inputText2.value = ''
    inputTextarea.value = ''
})