//venuepop-up calendar js
var config= {
    dateFormat: 'd-m-Y',
    altInput: true,
    altFormat: "F j, Y",
    inline: true,
    minDate: "today",
    maxDate: new Date().fp_incr(7)
  }
  flatpickr("#date-picker", config);

//venue pop-up js
const wrapper=document.querySelector('.wrapper');
const iconClose= document.querySelector('.icon-close');
function togglePopup(num){
  document.getElementById(`popup-${num}`).classList.toggle("active-popup"); 
  }

iconClose.addEventListener('click',()=> {
  wrapper.classList.remove('active-popup');
});