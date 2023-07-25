// On Scroll Function Start
function navMenu(){
    let navBar = document.querySelector('.navbar-sticky');
    let scrollTopButton = document.querySelector('#scrollUp');

    window.onscroll = function(){
        var scroll = document.documentElement.scrollTop;
        if(scroll >= 120){
            navBar.classList.add('navbar-sticky-moved-up');
        }else{
            navBar.classList.remove('navbar-sticky-moved-up');
        }

        // Apply Transition
        if(scroll >= 250){
            navBar.classList.add("navbar-sticky-transitioned");
            scrollTopButton.classList.add('scrollActive');
        }else{
            navBar.classList.remove("navbar-sticky-transitioned");
            scrollTopButton.classList.remove('scrollActive');
        }

        // Sticky On Mode
        if(scroll >= 500){
            navBar.classList.add("navbar-sticky-on");
        }else{
            navBar.classList.remove("navbar-sticky-on");
        }
    }
}

navMenu();

// Counter Design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1: -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval( () => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(time);
            }
        }, step);
    }

    counter("count1", 0,10,2000);
    counter("count2", 100,20,3000);
    counter("count3", 0,30,4000);
    counter("count4", 0,10,2000);
});


// App Screen Swiper Slider App Screenshots

var swiper = new Swiper(".swiper-container.app-screen", {
    effect: "coverflow",
    loop:true,
    autoplaySpeed: 3000,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 5000,
        disabledOnInteraction:false
        },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 150,
      modifier: 1.5,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    paginationClickable: true,
  });


  // Side Navigation Bar Close When we Click On Navigation Link

  let navBar = document.querySelector(".nav-link");
  let navCollapse = document.querySelector(".navbar-collapse.collapse");

  navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
  })
