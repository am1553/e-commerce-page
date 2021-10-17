// BUTTONS
const menuBtn = document.getElementById("menu_btn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const cardBtn = document.getElementById("cardBtn");



// ------------------------OPEN MENU AND APPLY OVERLAY EFFECT
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



// -----------------------------VIEW PREV AND NEXT IMAGE
// *********** code reference -- https://www.youtube.com/watch?v=gBzsE0oieio

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

// --------------------------------------CART CARD
// ************************************* empty cart
cardBtn.addEventListener("click", () => {
    const shoppingCart = document.querySelector(".shopping-cart");
    if(shoppingCart.style.display == "none") {
        shoppingCart.style.display = "flex";
    } else {
        shoppingCart.style.display = "none";
    }
})

//------------------------------------ITEM QUANTITIY

// *********** buttons
let minusBtn = document.getElementById("minus-btn");
let plusBtn = document.getElementById("plus-btn");
let inputValue = document.getElementById("number");


// ********** buttons eventlisteners
plusBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let value = parseInt(inputValue.value);
    value++;
    inputValue.value = value;
    let count = inputValue.value;
    checkoutCart(count);
    checkoutPrice(count);
});

minusBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let value = parseInt(inputValue.value);
    value < 1 ? value = 1 : '0';
    value--;
    inputValue.value = value;
    let count = inputValue.value;
    checkoutCart(count);
    checkoutPrice(count);
});




// ------------------------------------------ADD ITEMS TO CART
const checkoutItems = document.getElementById("checkout-items");
const totalCost = document.getElementById("total-cost");
const price = 125.00;


function checkoutCart(count) {
    let quantity = count;
    
    return checkoutItems.innerHTML = "$" + price.toFixed(2) + " " + "x" + " " + quantity;
}

function checkoutPrice(count) {
    let quantity = count;
    
    return totalCost.innerHTML = "$" + count * price;
}

// ADD ITEMS CLICK EVENT
const addToCart = document.getElementById("add-to-cart");
const checkoutItemAdded = document.querySelector(".item-added");
const cartNoItemText = document.querySelector(".cart-text");
addToCart.addEventListener("click", ()=> {
    checkoutItemAdded.style.display = "flex";
    cartCheckoutBtn.style.display = "flex";
    cartNoItemText.style.display = "none";
})

// REMOVE ITEMS CLICK EVENT
const cartCheckoutBtn = document.getElementById("cart-checkout");
cartCheckoutBtn.addEventListener("click", ()=> {
    checkoutItemAdded.style.display = "none";
    cartCheckoutBtn.style.display = "none";
    cartNoItemText.style.display = "flex";
})