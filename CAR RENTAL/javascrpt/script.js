// menu 
const menuIcon = document.getElementById("menu")
const navLinks = document.querySelector("nav")


menuIcon.addEventListener("click" , ()=>{
   if(  navLinks.style.display === "none" ){
    navLinks.style.display = "block"
   }
   else{
    navLinks.style.display = "none"
   }
})


const slideLeftBtn = document.querySelector(".slide-left");
const slideRightBtn = document.querySelector(".slide-right");
const slideshowContainer = document.querySelector(".slideshow-container");
const slideWidth = slideshowContainer.offsetWidth;
let currentSlideShow = 0
const totalSlides = slideshowContainer.children.length

const slideLeft = () =>{
if(currentSlideShow > 0){
    currentSlideShow-- ;
    slideshowContainer.scrollBy ({
       left: - slideWidth,
       behavior : "smooth" 
    })
} else {
    currentSlideShow = totalSlides -1;
    slideshowContainer.scrollTo({
        left: slideWidth * currentSlideShow,
        behavior: "smooth"
    })
}


}

const slideRight = () =>{
    if( currentSlideShow < totalSlides -1){
        currentSlideShow ++;
        slideshowContainer.scrollBy({
            left: slideWidth,
            behavior: "smooth"
        })
    } else{
        currentSlideShow = 0
        slideshowContainer.scrollTo({
            left: 0,
            behavior: "smooth"
        })
    }
}

slideLeftBtn.addEventListener("click", slideLeft)
slideRightBtn.addEventListener("click", slideRight)

setInterval(slideRight, 8000)














const slideLeftBtns = document.querySelector(".left i");
const slideRightBtns = document.querySelector(".right i");
const slideshowContainers = document.querySelector(".teamContainer");
const slideWidths = slideshowContainer.offsetWidth;
let currentSlide = 0;
const totalSlidess = slideshowContainer.children.length;

const slideLefts = () => {
  if (currentSlide > 0) {
    currentSlide--;
    slideshowContainers.scrollBy({
      left: -slideWidth,
      behavior: "smooth"
    });
  } else {
    currentSlide = totalSlidess - 1;
    slideshowContainers.scrollTo({
      left: slideWidth - currentSlide,
      behavior: "smooth"
    });
  }
};

const slideRights = () => {
  if (currentSlide < totalSlidess - 1) {
    currentSlide++;
    slideshowContainers.scrollBy({
      left: slideWidths,
      behavior: "smooth"
    });
  } else {
    currentSlide = 0;
    slideshowContainers.scrollTo({
      left: 0,
      behavior: "smooth"
    });
  }
};

slideLeftBtns.addEventListener("click", slideLefts);
slideRightBtns.addEventListener("click", slideRights);

setInterval(slideRights, 8000);
