const navbtn = document.querySelector('#nav-menu');
const popupMenu = document.querySelector('#popup-menu');
const closeBtn = document.querySelector('#close');

// navbtn.addEventListener('click',()=>{
//     popupMenu.style.opacity='1';
//     popupMenu.style.transform='translateX(0%)';
//     popupMenu.style.visibility='visible';
// })

// closeBtn.addEventListener('click',()=>{
//     popupMenu.style.opacity='0';
//     popupMenu.style.transform='translateX(100%)';
//     popupMenu.style.visibility='hidden';
// })

navbtn.addEventListener('click', () => {
    popupMenu.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    popupMenu.classList.remove('active');
})

// banner 
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
    });
    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});
function inquire() {
  alert("Thanks for your interest! We'll contact you soon.");
}
// Add event listener to each step section
document.querySelectorAll('.step').forEach((step) => {
    step.addEventListener('click', () => {
        // Toggle the visibility of the step's content
        step.querySelector('ul').classList.toggle('hidden');
    });
});
// const steps = [
//   {
//     title: "Career Framework",
//     items: [
//       "Depend on Academics.",
//       "Identify Your Core Skills.",
//       "Explore Your Interests.",
//       "Future Technologies.",
//       "Lifelong Mentorship."
//     ]
//   },
//   {
//     title: "Admission Process",
//     items: [
//       "File the Admission Form.",
//       "Join the Community.",
//       "Join in Tech Hackathons.",
//       "Access Soft Skills Training.",
//       "Connect to Support Team."
//     ]
//   },
//   {
//     title: "Technical Training",
//     items: [
//       "Learn from Industry expert.",
//       "One-to-One Support.",
//       "Work on Assignments.",
//       "Depth Technical Skills.",
//       "Hand Holding support."
//     ]
//   },
//   {
//     title: "Project Development",
//     items: [
//       "Work in Live Projects.",
//       "Deploy Project on Server.",
//       "Learn Case Studies.",
//       "Scenario-Based Projects.",
//       "Mentor for Project."
//     ]
//   },
//   {
//     title: "Interview Preparation",
//     items: [
//       "Technical Interview Q&A.",
//       "Join in Mock Interviews.",
//       "Build Your Resume.",
//       "Prepare for HR Interviews.",
//       "Communication Skills."
//     ]
//   },
//   {
//     title: "100% Placement Assistance Program",
//     items: [
//       "Unlimited Interview Call.",
//       "Interview calls to all.",
//       "Internship Opportunities.",
//       "End-to-End Placement.",
//       "Dedicated HR Assistance."
//     ]
//   }
// ];

// const container = document.getElementById("timeline");

// steps.forEach((step, index) => {
//   const div = document.createElement("div");
//   div.className = "step";

//   const number = document.createElement("div");
//   number.className = "number";
//   number.innerText = String(index + 1).padStart(2, '0');

//   const heading = document.createElement("h3");
//   heading.innerText = step.title;

//   const list = document.createElement("ul");
//   step.items.forEach(item => {
//     const li = document.createElement("li");
//     li.innerText = item;
//     list.appendChild(li);
//   });

//   div.appendChild(number);
//   div.appendChild(heading);
//   div.appendChild(list);
//   container.appendChild(div);
// });

// // Optional: Auto-slide
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 2000);
window.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

var swiper = new Swiper(".studentReviewSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const ctx = document.getElementById('salaryChart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Min', 'Average', 'Max'],
    datasets: [{
      label: 'Annual Salary for Full-Stack Developer',
      data: [950000, 1900000, 3300000],
      backgroundColor: ['#888', '#00d2ff', '#00e676']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Salary (INR/year)'
        },
        ticks: {
          callback: function(value) {
            return (value / 1000000).toFixed(1) + 'M';
          }
        }
      }
    }
  }
});















