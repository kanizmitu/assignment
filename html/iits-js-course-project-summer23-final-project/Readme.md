# Final Project for Front-end Development using JavaScript
var countinc = document.querySelector(".addToCartBtn")
var counttext = document.getElementById("iits-cart_counter")
var countdec = document.getElementById("cart_dec")

countinc.addEventListener('click',function()
{ 
counttext.textContent = parseInt(counttext.textContent) + 1;
}
);
countdec.addEventListener('click',function()
{ 
    if (parseInt(counttext.textContent)>0)
counttext.textContent = parseInt(counttext.textContent) - 1;
}
);
