// BUTTONS
const menuBtn = document.getElementById("menu_btn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

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


// *** code reference -- https://www.youtube.com/watch?v=gBzsE0oieio

// VIEW PREV AND NEXT IMAGE
const imageList = document.querySelector(".carousel-images");
const slides = Array.from(imageList.children)
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
}
slides.forEach(setSlidePosition);


const moveToSlide = (imageList, currentSlide, targetSlide) => {
    imageList.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("carousel-slide");
    targetSlide.classList.add("carousel-slide");
    
}


nextBtn.addEventListener("click", e => {
    const currentSlide = imageList.querySelector(".carousel-slide");
    const nextSlide = currentSlide.nextElementSibling;
    // console.log(moveAmount);
    moveToSlide(imageList, currentSlide, nextSlide);
})
prevBtn.addEventListener("click", e => {
    const currentSlide = imageList.querySelector(".carousel-slide");
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(imageList, currentSlide, prevSlide);
})

