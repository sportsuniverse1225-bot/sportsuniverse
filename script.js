/* =====================================
   SPORTSUNIVERSE
   JAVASCRIPT
===================================== */
/* =====================================
   SMART SEARCH + CATEGORY FILTER
===================================== */

let currentCategory = "all";

function filterProducts(category, button) {

    currentCategory = category;

    document.querySelectorAll(".cat-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    updateProducts();

}

function searchProducts() {

    updateProducts();

}

function updateProducts() {

    const search = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const products = document.querySelectorAll(".product");

    products.forEach(product => {

        const productName = product
            .querySelector("h3")
            .innerText
            .toLowerCase();

        const matchesCategory =
            currentCategory === "all" ||
            product.classList.contains(currentCategory);

        const matchesSearch =
            productName.includes(search);

        if (matchesCategory && matchesSearch) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}



/* =====================================
   SCROLL TO TOP BUTTON
===================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};






/* ==========================
   NAVBAR SHADOW
========================== */

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.35)";

    }

    else {

        header.style.boxShadow = "none";

    }

});
/* =====================================
IMAGE POPUP
===================================== */

const modal = document.getElementById("imageModal");

const modalImage = document.getElementById("modalImage");

const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".product img").forEach(img=>{

img.addEventListener("click",()=>{

modal.style.display="flex";

modalImage.src=img.src;

});

});

closeModal.onclick=function(){

modal.style.display="none";

}

modal.onclick=function(e){

if(e.target===modal){

modal.style.display="none";

}

}
/* ================================
   ORDER NOW BUTTON
================================ */

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(button => {

    button.addEventListener("click", function () {

        // Find the product card
        const productCard = this.closest(".product");

        // Read the product name automatically
        const productName =
            productCard.querySelector("h3").innerText;

        // Fill the order form
        document.querySelector('input[name="Product"]').value = productName;

        // Scroll to the form
        document.querySelector(".order-form").scrollIntoView({

            behavior: "smooth"

        });

    });

});