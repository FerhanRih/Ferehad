// Fade in sections as you scroll
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (sectionTop < screenPosition) {
      section.classList.add("fade-in");
    }
  });
});

// Update footer with the current year
document.getElementById("year").textContent = new Date().getFullYear();

// Show scroll-to-top button when scrolled down
const scrollToTopButton = document.createElement("div");
scrollToTopButton.classList.add("scroll-to-top");
scrollToTopButton.innerHTML = "&#8679;"; // Arrow symbol for "up"
document.body.appendChild(scrollToTopButton);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
