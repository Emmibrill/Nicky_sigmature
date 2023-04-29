const navToggler = document.querySelector('.hambugger');
const navList = document.querySelector('.nav__list');
const nav_list = document.querySelectorAll('.list');
const sectionSelector = document.querySelectorAll('[data-target]');
const sectionDisplay = document.querySelectorAll('[data-content]');
const order_button = document.querySelectorAll('.orderButton');

window.addEventListener('load', () => {
    document.querySelector('.preloader').style.display = 'none'  
})

navToggler.addEventListener('click', () => {
    navList.classList.toggle('navActive')
})
Array.from(nav_list).forEach(nav => {
    nav.addEventListener('click', () => {
        nav_list.forEach(nav => {
            nav.classList.remove('active')
        })
      nav.classList.add('active')
    })
})

Array.from(sectionSelector).forEach(selector => {
    selector.addEventListener('click', () => {
        const target = document.querySelector(selector.dataset.target)
        Array.from(sectionDisplay).forEach(display => {
            display.classList.remove('active')
        })
        target.classList.add('active')
        activateActive(selector);
    })
})

alertBeforePurchase()

function activateActive(target){
    Array.from(sectionSelector).forEach(selector => {
        selector.classList.remove('active')
    })
    target.classList.add('active')
}
function alertBeforePurchase(){
    order_button.forEach(button => {
        button.addEventListener('click', () => {
            console.log(button)
            alert('we are glad to have you here');
        })
    })
}

 


