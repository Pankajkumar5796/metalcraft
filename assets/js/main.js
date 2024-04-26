$(document).ready(function() {
  // When search icon is clicked
  $("#search_icon").click(function(event) {
    // Prevent the click event from propagating to the document body
    event.stopPropagation();
    // Toggle the visibility of the search form with animation
    $(".search-form").fadeToggle("slow");
  });

  // When anywhere in the body is clicked
  $(document.body).click(function(event) {
    // Check if the click target is not the search form or the search icon
    if (!$(event.target).closest('.search-form').length && !$(event.target).is('#search_icon')) {
      // Hide the search form with animation
      $(".search-form").fadeOut("slow");
    }
  });
});


let nav = document.querySelector(".navbar");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// $('.hero-slide').owlCarousel({
//   loop:true,
//   margin:10,
//   nav:false,
//   dots:false,
//   autoplay:true,
//   margin:0,
//   animateIn: 'fadeIn',	
//   animateOut: 'animate__fadeOut',
//   // autoplayTimeout: 8000,
//   smartSpeed: 8000,
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:1
//       },
//       1000:{
//           items:1
//       }
//   }
// });
// $('.hero-slide').owlCarousel({
//   loop:true,
//   margin:0,
//   nav:false,
//   dots:false,
//   autoplay:true,
//   animateIn: 'fadeIn',  // Set the fade-in animation
//   animateOut: 'fadeOut', // Set the fade-out animation
//   smartSpeed: 800,      // Adjust the speed of the animation
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:1
//       },
//       1000:{
//           items:1
//       }
//   }
// });


AOS.init({
  duration: 2000,
});


//work-wrapper-section counter



document.addEventListener('DOMContentLoaded', function() {
  // Function to animate counter
  function animateCounter(counter) {
    var target = parseInt(counter.getAttribute('data-target'));
    var count = parseInt(counter.textContent);
    var speed = Math.ceil(target / 100); // Adjust the animation speed

    var updateCount = function() {
      count += speed;
      counter.textContent = count;

      if (count < target) {
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = target;
      }
    };

    updateCount();
  }

  // Callback function for intersection observer
  function handleIntersect(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }

  // Create a new Intersection Observer
  var observer = new IntersectionObserver(handleIntersect, { threshold: 0.5 });

  // Select all elements with the class "counter"
  var counters = document.querySelectorAll('.counter');

  // Observe each counter element
  counters.forEach(function(counter) {
    observer.observe(counter);
  });
});

//work-wrapper-section counter end


// Testimonial

$('.testimonial').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});

 /* gallery section start */
// Fancybox Configuration
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close",
  ],
  loop: false,
  protect: true,
  });




 

