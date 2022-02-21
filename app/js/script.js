//burger button toggle

const burgerBtn = document.querySelector(".menu-toggle");
let tl = gsap.timeline({ reversed: true });
tl.fromTo(".mobile-menu", 0.5, { height: 0 }, { height: "80vh" });

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("is-active");

  if (burgerBtn.classList.contains("is-active")) {
    tl.play();
  } else {
    tl.reverse();
  }
});

//validate form field before submitting

const form = document.querySelector("form");
const inputElement = form.querySelector("input");

form.addEventListener("submit", (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    form.classList.add("error");

    inputElement.addEventListener("input", () => {
      if (inputElement.value !== null) {
        form.classList.remove("error");
      }
    });
  } else {
    inputElement.value = null;
  }
});
