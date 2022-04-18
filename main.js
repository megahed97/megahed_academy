// window.addEventListener("scroll", function (eo) {
//   let reloade = document.querySelectorAll(".reloade");
//   for (let i = 0; i < reloade.length; i++) {
//     let windowheight = window.innerHeight;
//     let reloadetop = reloade[i].getBoundingClientRect().top;
//     let reloadepoint = 150;

//     if (reloadetop < windowheight - reloadepoint) {
//       reloade[i].classList.add("active");
//     } else {
//       reloade[i].classList.remove("active");
//     }
//   }

//   let header = document.querySelector("header");
//   header.classList.toggle("stikey", window.scrollY > 0);
// });

// -----------------------------

window.addEventListener("scroll", function (eo) {
  let reloade = document.querySelectorAll(".reloade");

  reloade.forEach((element) => {
    let windowheight = window.innerHeight;
    let reloadetop = element.getBoundingClientRect().top;
    let reloadepoint = 150;

    if (reloadetop < windowheight - reloadepoint) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });

  // -----------------------------

  let header = document.querySelector("header");
  header.classList.toggle("stikey", window.scrollY > 0);
});

// -----------------------------

// let buttons = document.querySelectorAll(".button-new button");

// buttons.forEach((element) => {
//   element.addEventListener("click", function (eo) {
//     let x = `eo.clientX - eo.target.offsetLeft + px`;
//     let y = `eo.clientY - eo.target.offsetTop + px`;

//     let span = document.createElement("span");
//     span.classList.add("span-style");
//     span.style.left = x;
//     span.style.top = y;
//     this.appendChild(span);
//     setTimeout(() => {
//       span.remove();
//     }, 1000);
//   });
// });
