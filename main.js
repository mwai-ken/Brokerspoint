const menubtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-menu");
const loader = document.querySelector(".loader");
const main = document.querySelector(".main");
const topbtn = document.querySelector(".scroll-to-top");

/*hamburger*/
menubtn.addEventListener('click', ()=>{
    menubtn.classList.toggle('active');
    nav.classList.toggle('active');
});


function init() {
    setTimeout( ()=>{
      loader.style.opacity = 0;
      loader.style.display = "none";

      main.style.display = "block";
      main.style.opacity = 1;
    },3000);
}
/*-----calling the function ---*/
init();


topbtn.addEventListener('click', () => {
     document.body.scrolltop = 0;
});