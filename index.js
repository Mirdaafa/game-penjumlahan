document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculateButton").addEventListener("click", calculateSum);
});

function calculateSum() {
    let num1 = parseInt(document.getElementById("num1").value) || 0;
    let num2 = parseInt(document.getElementById("num2").value) || 0;
    let sum = num1 + num2;
    document.getElementById("result").textContent = sum;
    
    let itemsContainer = document.getElementById("items");
    itemsContainer.innerHTML = ""; 
    
    for (let i = 0; i < sum; i++) {
        let img = document.createElement("img");
        img.src = "https://via.placeholder.com/50"; 
        img.alt = "Item";
        itemsContainer.appendChild(img);
    }
}