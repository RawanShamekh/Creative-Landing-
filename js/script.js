let nav=document.querySelector("nav");
let navHeight=nav.offsetHeight;
let windowHeight=window.innerHeight;
let hei=windowHeight-navHeight;
document.querySelector("section").style.height=`${hei-100}px`;






let img=document.querySelectorAll(".phones img");
console.log(img)

img.forEach((el)=>{
    el.addEventListener('click',function(e){
        let bigphone=document.querySelector(".phone img");
        document.body.style.backgroundColor=el.getAttribute('data-color');
        bigphone.src=el.src;
       
    })

})

