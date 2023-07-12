const menu = document.querySelector('#mobile_menu')
const menuLinks = document.querySelector('.navbar_menu')

//Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
} 

menu.addEventListener('click',mobileMenu);

let theEnd = 0, navbar=document.getElementById('navbar');

window.addEventListener('scroll',function (){
    var scrollTop = window.scrollX || document.documentElement.scrollTop;
    if(scrollTop>theEnd){
        navbar.style.top='-80px';
    } 
    else{
        navbar.style.top='0';
    }
    theEnd=scrollTop;
})