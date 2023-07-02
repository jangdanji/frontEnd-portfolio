var _ = require('lodash');

/* 테이블 만들기 */
const puzzle = document.querySelector('.puzzle-grid')
const table = document.createElement('table')

for (let i = 1; i <= 10; i++){

    const tr = document.createElement('tr')

    for (let j = 1; j <= 9; j++) {
        const td = document.createElement('td')
        tr.appendChild(td)
    }

    table.appendChild(tr)
}

puzzle.appendChild(table)

/* 가로세로 만들기 */

const columnText = [
    { row: 1, col: 3, word: 'jquery' },
    { row: 4, col: 2, word: 'sass' },
    { row: 7, col: 1, word: 'parcel' },
    { row: 10, col: 2, word: 'html' },
    { row: 4, col: 7, word: 'css' },
]

const rowText = [
    { row: 1, col: 3, word: 'javascript'},
    { row: 1, col: 7, word: 'react'},
]

columnText.forEach((text) => {
    for (let i = 0; i < text.word.length; i++) {
        const target = document.querySelector(`.puzzle-grid table tr:nth-child(${text.row}) td:nth-child(${text.col + i})`)
        target.textContent = text.word[i]
        target.classList.add(text.word)
    }
})

rowText.forEach((text) => {
    for (let i = 0; i < text.word.length; i++) {
        const target = document.querySelector(`.puzzle-grid table tr:nth-child(${text.row + i}) td:nth-child(${text.col})`)
        target.textContent = text.word[i]
        target.classList.add(text.word)
    }
})

/* 텍스트가 없는 부분 투명처리하기 */
const allTd = document.querySelectorAll('.puzzle-grid table td')
allTd.forEach((td) => {
    if (td.textContent === '') td.style.border = 'none'
    else td.classList.add('word')
})

/* 퍼즐 중복 체크 알고리즘 : 겹친 낱말을 두번 클릭하면 active되지 못한 다른 퍼즐이 active되는 식임*/
/* findSolo는 active되지 못한 퍼즐의 클래스명을 찾아줌 */

function findSolo(clickClass, allClass) {

    allClass = _.without(allClass, 'word')
    allClass = _.without(allClass, 'active')

    let active = _.countBy(allClass) /* 카운트 세기 */
    active = _.pickBy(active, value => value > 1) /* 젤 많이 있는거 찾기 (active 상태인것) */
    active = _.keys(active)[0] /* 변수화 */
    
    let notActive = _.find(clickClass, value => value !== active) /* 활성화 안된거 */

    return notActive
}

function findActived(allClass) {

    allClass = _.without(allClass, 'word')
    allClass = _.without(allClass, 'active')

    let active = _.countBy(allClass) /* 카운트 세기 */
    active = _.pickBy(active, value => value > 1) /* 젤 많이 있는거 찾기 (active 상태인것) */
    active = _.keys(active)[0] /* 변수화 */

    return active
}


/* 퍼즐을 클릭!! 하면 강조 활성화 및 기술 탭 클릭 */
const wordTd = document.querySelectorAll('.puzzle-grid table td.word')
wordTd.forEach((td) => {
    td.addEventListener('click', function(){

        let className = td.getAttribute('class')
        className = className.replace(' word', '') /* 공백 있음 주의 */
        className = className.replace(' active', '')
        className = className.split(' ')

        let targetClass = className[0]

        if ($(td).hasClass('active') && className.length > 1) {

            const findActive = document.querySelectorAll('td.active')
            let activeTds = []

            findActive.forEach((active) => {
                const classes = active.getAttribute('class').split(' ')
                activeTds.push(...classes)
            })
            
            activeTds = activeTds.filter((value) => value !== 'active' && value !== 'word') 
            targetClass = findSolo(className, activeTds)
        }

        wordTd.forEach((td) => td.classList.remove('active')) /* 초기화 */
        const targetTd = document.querySelectorAll(`.puzzle-grid table .${targetClass}`)
        targetTd.forEach((td) => {
            $(td).toggleClass('active')
        })
    })

})

const mySkillsImg = document.querySelectorAll('.skill-tree .skill-img img')

const mySkillClasses = document.querySelectorAll('.skill-level ul li');
let SkillClass = Array.from(mySkillClasses).map((li) => li.getAttribute('class'));
SkillClass = _.uniq(SkillClass)
// ['html-skill', 'css-skill', 'js-skill', 'jquery-skill', 'sass-skill', 'parcel-skill', 'react-skill']

mySkillsImg.forEach((img) => { /* 활성화 dot 넣기 */
    const dot = document.createElement('div')
    dot.setAttribute('class', 'icon-active')
    dot.innerHTML = '<i class="fas fa-circle"></i>'
    img.parentElement.appendChild(dot)
})

const allDots = document.querySelectorAll('.icon-active')
const skillTitle = document.querySelector('.skill-level h2')


/* 탭 이미지를 클릭!! 하면 퍼즐 activate */
mySkillsImg.forEach((img, index) => {
    img.addEventListener('click', function(){
        mySkillClasses.forEach(li => li.style.display = 'none') /* 초기화 */
        allDots.forEach(dot => dot.style.opacity = '0') /* dot 초기화 */

        const targetClass = document.querySelectorAll(`.skill-level ul li.${SkillClass[index]}`)
        targetClass.forEach(li => li.style.display = 'list-item')

        let thisClass = img.getAttribute('id')
        thisClass = thisClass.replace('-img', '')

        wordTd.forEach((td) => td.classList.remove('active')) /* 초기화 */
        const targetTd = document.querySelectorAll(`.puzzle-grid table .${thisClass}`)
        targetTd.forEach((td) => $(td).toggleClass('active'))

        img.nextSibling.style.opacity = '1'

        skillTitle.textContent = `${thisClass} 숙련도`

    })
})

/* 퍼즐의 뒷배경 */

mySkillsImg.forEach((img, index) => {
        const imgSrc = img.getAttribute('src')
        const puzzleBack = document.querySelector('.puzzle-grid .puzzle-back')
        const puzzleBackImg = document.createElement('img')
        puzzleBackImg.setAttribute('src', imgSrc)
        
        let tableWidth = document.querySelector('.puzzle-grid table')
        tableWidth = getComputedStyle(table)
        tableWidth = parseInt(tableWidth.width)

        puzzleBack.style.left = `${tableWidth / 2}px`
        puzzleBackImg.style.opacity = '0'
        puzzleBackImg.style.transition = '0.2s'
        puzzleBack.appendChild(puzzleBackImg)

        img.addEventListener('click', function(){
            puzzleBack.querySelectorAll('img').forEach((img) => img.style.opacity = '0')
            puzzleBackImg.style.opacity = '1'
        })
})

/* 퍼즐 단어 클릭 */
wordTd.forEach((td) => {
    td.addEventListener('click', function(){

        const findActive = document.querySelectorAll('td.active')
        let activeTds = []

        findActive.forEach((active) => {
            const classNames = active.getAttribute('class').split(' ')
            activeTds.push(...classNames)
        })

        const activated = findActived(activeTds)
        const targetImg = document.getElementById(`${activated}-img`)
        // console.log(targetImg)

        targetImg.click()
    })
})


/* 기본 */
mySkillsImg[0].click()