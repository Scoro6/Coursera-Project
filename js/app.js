const nav = document.querySelector(".links");
const button = document.querySelector(".menu");
const links = document.querySelectorAll('.links div');
const burger = document.querySelector('.burger');
const header = document.querySelector('.intro');
const proceed = document.querySelector('.proceed');
const content = document.querySelector('.content');
const image = document.querySelector('.image');

const tl = new TimelineMax();

tl.fromTo(header,1.5,{opacity:"0",x:"30%"},{opacity:"1",x:"0%"});

function navSlide(){
    button.addEventListener('click',()=>{
        nav.classList.toggle("toggle");
        burger.classList.toggle("burger-open");
        links.forEach((link,index)=>{
            if(link.style.animation)
            {
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.7}s`;
            }
        });
    });
    proceed.addEventListener('click',()=>{
        const tl2 = new TimelineMax();
        tl2.fromTo(content,2,{x:"-100%"},{x:"0%",ease: Power2.easeInOut})
        .fromTo(image,1.5,{x:"100%"},{x:"0%",ease: Power2.easeInOut},"-=2");
    });
}

navSlide();

