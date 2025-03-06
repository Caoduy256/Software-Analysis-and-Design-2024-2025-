const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')

adressbtn.addEventListener("click" , function(){
    document.querySelector('.adress-form').style.display="flex"
})
adressclose.addEventListener("click" , function(){
    document.querySelector('.adress-form').style.display="none"
})
//slider
const rightbtn=document.querySelector('.fa-chevron-right')
const leftbtn=document.querySelector('.fa-chevron-left')
let index = 0
const imgNuber = document.querySelectorAll('.slider-content-left-top img')
rightbtn.addEventListener("click",function(){
    index = index+1
    if(index>imgNuber.length-1){
        index=0 
    }
    document.querySelector(".slider-content-left-top").style.right =  index*100+"%"
})
leftbtn.addEventListener("click",function(){
    index = index-1
    if(index<=0){
        index=imgNuber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index*100+"%"
})
const imgNuberLi= document.querySelectorAll('.slider-content-left-bottom li')
imgNuberLi.forEach(function(image,index){
    image.addEventListener("click",function(){
        removeactive()
        document.querySelector(".slider-content-left-top").style.right = index*100+"%"
        image.classList.add("active")
    }) 
})
function removeactive (){
    let imagactive = document.querySelector('.active')
    imagactive.classList.remove("active")
}
function imgAuto(){
    index = index +1
    if ( index > imgNuber.length-1 ){
        index = 0
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = index*100+"%"
    imgNuberLi[index].classList.add("active")
}
setInterval(imgAuto,3500)
const menu = document.querySelector('.menu-bar-content');
        const dropdown = document.querySelector('.dropdown');

        menu.addEventListener('mouseenter', () => {
            dropdown.style.display = 'flex';
        });

        menu.addEventListener('mouseleave', () => {
            dropdown.style.display = 'none';
        });