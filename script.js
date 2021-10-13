// // SELECTORS

const menuBtn = document.getElementById("menu_btn");

// OPEN MENU AND APPLY OVERLAY EFFECT
menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const menuList = document.getElementById("menu");
    const overlayEffect = document.getElementById("overlay-effect");

    // toggle menu
    if (menuList.style.left === "-2000rem") {
        menuList.style.left = "0px";
        
    } else if (menuList.style.left === "0px") {
        menuList.style.left = "-2000rem";
        
    } else {
        menuList.style.left = "0px";
        overlayEffect.style.display = "none"    
    };

    // toggle overlay effect
    if(menuList.style.left === "0px") {
        overlayEffect.style.display = "block"
    } else if (menuList.style.left = "-2000rem") {
        overlayEffect.style.display = "none";
    } else {
        overlayEffect.style.display = "none" 
    }
})
