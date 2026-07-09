let cartCount = 0;
let cartTotal = 0;

function addToCart(product, price) {
    cartCount++;
    cartTotal += price;

    document.getElementById("cart-count").textContent = cartCount;
    document.getElementById("cart-total").textContent = cartTotal;

    const item = document.createElement("li");
    item.textContent = product + " - " + price + " грн";

    document.getElementById("cart-items").appendChild(item);
}

function toggleCart() {
    const box = document.getElementById("cart-box");

    if (box.style.display === "block") {
        box.style.display = "none";
    } else {
        box.style.display = "block";
    }
}   