const home = document.querySelector('.home_container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll',()=>{
    home.style.opacity = 1-(window.scrollY / homeHeight);
    
}
)

