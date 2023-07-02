const swiper = new Swiper('.swiper', {

    // // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

/* 스와이퍼 navigation 밖으로 빼기(라기보단 새로 만들기) */

const swipers = document.querySelectorAll('.swiper')

document.querySelectorAll('.swiper-button-prev').forEach((value) => value.style.display = 'none')
document.querySelectorAll('.swiper-button-next').forEach((value) => value.style.display = 'none')

swipers.forEach((swiper) => {

  swiper.parentElement.style.position = 'relative'

  const left = document.createElement('div')
  left.innerHTML = '<i class="fas fa-chevron-left"></i>'
  left.style.cssText = 'position: absolute; top: 50%; left: -50px; transform: translateY(-50%); font-size: 50px; cursor: pointer'
  const right = document.createElement('div')
  right.innerHTML = '<i class="fas fa-chevron-right"></i>'
  right.style.cssText = 'position: absolute; top: 50%; right: -50px; transform: translateY(-50%); font-size: 50px; cursor: pointer'

  left.addEventListener('click', () => swiper.querySelector('.swiper-button-prev').click())
  right.addEventListener('click', () => swiper.querySelector('.swiper-button-next').click())

  swiper.parentElement.appendChild(left)
  swiper.parentElement.appendChild(right)
})
