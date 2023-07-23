
const body = document.querySelector('body')
const fullModal = document.querySelector('.full-modal')
const myCode = document.querySelector('.full-modal .my-code')

const exit = document.querySelector('.full-modal .exit')

exit.addEventListener('click', function(){
    body.style.overflow = 'auto'
    fullModal.style.display = 'none'
})

const codeList = [
    {url : 'https://carbon.now.sh/embed/rO2lsh902VDLX5LA4YJF', height : '1098'},
    {url : 'https://carbon.now.sh/embed/Fx5SmmOOEaEfH7yEgW89', height : '1638'},
    {url : 'https://carbon.now.sh/embed/OJ2Az38FMIDqJqj5JwBo', height : '968'},
    {url : 'https://carbon.now.sh/embed/JRrXEIh54d2gvGEAc6Rb', height : '1228'},
    {url : 'https://carbon.now.sh/embed/mPHIaYMBea9HyAMpeNvx', height : '1805'},
    {url : 'https://carbon.now.sh/embed/9hmg8PPID5hzeIiwPwsB', height : '1991'},
    {url : 'https://carbon.now.sh/embed/10xnEaOIPDQ2c6AgvTjR', height : '16934'},
    {url : 'https://carbon.now.sh/embed/5TIQwPHnGiPbJYq9GHdR', height : '837'},
    {url : 'https://carbon.now.sh/embed/574G5KUEJcG6KdsGDNMP', height : '2587'},
]

const codeViewerBtn = document.querySelectorAll('.code-viewer')
codeViewerBtn.forEach((btn, index) => {
    btn.addEventListener('click', function(){
        body.style.overflow = 'hidden'
        fullModal.style.display = 'block'
        myCode.innerHTML = `
                        <iframe src="${codeList[index].url}"
                        style="width: 1000px; height: ${codeList[index].height}px; border:0; transform: scale(1); overflow:hidden;"
                        sandbox="allow-scripts allow-same-origin">
                        </iframe>`
    })
})



