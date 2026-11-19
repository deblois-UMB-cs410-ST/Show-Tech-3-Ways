// arjun 

console.log("hello galaxy");

let carousel = document.getElementById("area-3-carousel");  
let next = document.getElementById("next"); // button ref
let prev = document.getElementById("previous"); // button ref
let active_index = 0;
const slides = carousel.querySelectorAll(".carousel-slide");

next.addEventListener("click", _ => {
  slides[active_index].classList.toggle("active");
  active_index = (active_index + 1) % (slides.length);
  slides[active_index].classList.toggle("active");
  // console.log("next", active_index);  // test functionality (test passed)
});

prev.addEventListener("click", _ => {
  slides[active_index].classList.toggle("active");
  active_index--;
  if (active_index < 0) {
    active_index = slides.length - 1;
  }
 slides[active_index].classList.toggle("active");
 // console.log("prev", active_index);  // tests functionality (test passed))

 
});