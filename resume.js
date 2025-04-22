document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  document.getElementById("year").textContent = new Date().getFullYear();

const btn = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});