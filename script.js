const navToggler = document.querySelector('.hambugger');
const navList = document.querySelector('.nav__list');
const nav_list = document.querySelectorAll('.list');
const sectionSelector = document.querySelectorAll('[data-target]');
const sectionDisplay = document.querySelectorAll('[data-content]');
const order_button = document.querySelectorAll('.orderButton');
const prompt_Box = document.querySelector('.promptBox');
const promptCloseButton = document.querySelector('.prompt-close_button');

window.addEventListener('load', () => {
    document.querySelector('.preloader').style.display = 'none'  
})
window.addEventListener('load', () => {
    navList.classList.remove('navActive')  
})


navToggler.addEventListener('click', () => {
    let navState = navToggler.getAttribute('aria-controls');
    if(navState === 'closed'){
        navToggler.setAttribute('aria-controls', 'open')
    }else{navToggler.setAttribute('aria-controls', 'closed')}
    navList.classList.toggle('navActive')
    window.addEventListener('scroll', () => {
        navList.classList.remove('navActive') 
    })
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

function activateActive(target){
    Array.from(sectionSelector).forEach(selector => {
        selector.classList.remove('active')
    })
    target.classList.add('active')
}
callPromptBox()

function callPromptBox(){
    order_button.forEach(button => {
        button.addEventListener('click', () => {
            if(button){
                toggleCallPromptBox()
                showCurrentProductImage(button.parentElement)
            }
        })
    })
    
}

function toggleCallPromptBox(){
    prompt_Box.classList.toggle('open')
}
closePromptBox()

function closePromptBox(){
    promptCloseButton.addEventListener('click', () => {
        prompt_Box.classList.remove('open')
    })
}

function showCurrentProductImage(image){
    console.log(image)
    prompt_Box.querySelector('.prompt_image img').src = image.querySelector('img').src;
    
}




 


        