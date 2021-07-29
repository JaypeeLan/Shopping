let menu = document.querySelector('#mobile-toggle')
let menuLinks = document.querySelector('.navbar_menu')

    menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');

});

// product gallery

var productImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function(){

    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){

    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){

    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){

    productImg.src = smallImg[3].src;
}
