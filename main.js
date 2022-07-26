const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header__menu");
let activeSubMenu;
let activeArrow;

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})

menu.addEventListener("click", (event)=>{
    const target = event.target;
    if(target.classList.contains("menu-header")){
        const subMenu = target.parentNode.children[1];
        if (activeSubMenu != undefined && activeSubMenu != subMenu){
            activeSubMenu.classList.remove("active");
            activeArrow.classList.remove("active");
        }
        activeSubMenu = subMenu;
        activeArrow = target;
        target.classList.toggle("active");
        subMenu.classList.toggle("active");
    }
})