document.addEventListener("DOMContentLoaded", () => 
  {const toggle = document.querySelector(".menuToggle");
  const nav = document.querySelector(".menuNav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
});

