function setMobileViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setMobileViewportHeight);

const bgImgTarget = document.querySelector('.profileMsg')

// bgImgTarget.style.backgroundImage = 'url(./img/background.jpg)'
// bgImgTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
