// loading cart
window.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(function() {
      let element = document.querySelector(".loading");
      let elem2 = document.querySelector(".loader")
      if(element) {
          element.parentNode.removeChild(element);
      }
      if(elem2) {
          elem2.parentNode.removeChild(elem2);
      }
  }, 3000);
});


//-------------



// nav - чтобы менялся цвет при прокуртки страницы
window.addEventListener('scroll', function() {
  const nav = document.getElementsByTagName('nav')[0]; 
  const HTNL = document.getElementsByTagName('html')[0]; 
  const windowInnerWidth = window.innerWidth
  const scrollY = window.scrollY;
  if (scrollY === 0 && windowInnerWidth >= 700) {
      nav.style.backgroundColor = 'transparent';
      nav.style.backdropFilter = 'blur(0px)';
      HTNL.style.overflowY ='visible';
  } else if (scrollY >= 10 && windowInnerWidth >= 700) {
      nav.style.backgroundColor = '#d9d9d98f';
      nav.style.backdropFilter = 'blur(10px)';
      HTNL.style.overflowY ='visible';
  }else{
    nav.style.backgroundColor = 'transparent';
    nav.style.backdropFilter = 'blur(0px)';
  }

});


// burger
document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.getElementById('burger_btn');
  const burgerMenu = document.querySelector('.burger_menu');
  const html = document.getElementsByTagName('html')[0];
  burgerBtn.addEventListener('click', function () {
      burgerMenu.classList.toggle('open'); 
      html.classList.toggle('hidden');
  });
});
 //
//  document.addEventListener("DOMContentLoaded", function () {
//   gsap.fromTo(
//       ".nav_links",
//       {
//           y: -500,
//           opacity: 0,
//       },
//       {
//           duration: 1,
//           y: 0,
//           opacity: 1,
//           stagger: 0.2,
//           ease: "power2.out",
//           delay: 0.4,
//       }
//   );
//   gsap.fromTo(
//       ".cart_container",
//       {
//           y: -500,
//           opacity: 0,
//       },
//       {
//           duration: 1,
//           y: 0,
//           opacity: 1,
//           stagger: 0.2,
//           ease: "power2.out",
//           delay: 0.1,
//       }
//   );
//   gsap.fromTo(
//       ".logo",
//       {
//           y: -500,
//           opacity: 0,
//       },
//       {
//           duration: 1,
//           y: 0,
//           opacity: 1,
//           stagger: 0.2,
//           ease: "power2.out",
//           delay: 0.2,
//       }
//   );
//   gsap.fromTo(
//       ".motto",
//       {
//           x: -1000,
//           opacity: 0,
//       },
//       {
//           duration: 1.5,
//           x: 0,
//           opacity: 1,
//           stagger: 0.2,
//           ease: "power2.out",
//           delay: 0.1,
//       }
//   );
//   gsap.fromTo(
//       ".motto_text",
//       {
//           x: -1000,
//           opacity: 0,
//       },
//       {
//           duration: 1.8,
//           x: 0,
//           opacity: 1,
//           stagger: 0.2,
//           ease: "power2.out",
//           delay: 0.3,
//       }
//   );
//   gsap.fromTo(
//   ".img_on_bg",
//   {
//       scale: 0,
//       opacity: 0,
//   },
//   {
//       duration: 1.8,
//       scale: 1,
//       opacity: 1,
//       stagger: 0.2,
//       ease: "power2.out",
//       delay: 1,
//   }
//   );
//   gsap.fromTo(
//   ".social a",
//   {
//       x:100,
//       opacity: 0,
//   },
//   {
//       duration: 0.5,
//       x:0,
//       opacity: 1,
//       stagger: 0.8,
//       ease: "power2.out",
//       delay: 1,
//   }
//   );

// });
  // ыскщдд
  const aboutUsClick = document.getElementById('about_us_click');
  const burgerAboutUsClick = document.getElementById('burger_about_us_click');

  function clickAboutUs() {
    const aboutUsElement = document.getElementById('about_us');
    if (aboutUsElement) {
      const yOffset = aboutUsElement.getBoundingClientRect().top - (window.innerHeight / 2) + (aboutUsElement.clientHeight / 2);
      window.scrollBy({
        top: yOffset,
        behavior: 'smooth'
      });
    }
  }
  
aboutUsClick.addEventListener('click', clickAboutUs);
burgerAboutUsClick.addEventListener('click', clickAboutUs);  









  // -------------------------- cart ---------------------

// доавить в карзину только 1 рпаз
let buttons = document.querySelectorAll('.card_text_btn');

buttons.forEach((button) => {
  button.addEventListener('click', function() {
    this.value = "Добавлено!";
    setTimeout(function() {
      this.disabled = true;
  }, 1000);

  });
});


const itemCountElement = document.getElementById("item-count");
const countProdElement = document.getElementById("count_prod");
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");

let itemCount = 1; 

function updateItemCount() {
  itemCountElement.textContent = itemCount;
  countProdElement.textContent = itemCount;
}

decrementButton.addEventListener("click", function () {
  if (itemCount > 1) {
    itemCount--;
    updateItemCount();
  }
});

incrementButton.addEventListener("click", function () {
  itemCount++;
  updateItemCount();
});

updateItemCount();


//---------------------------sql---------------------------