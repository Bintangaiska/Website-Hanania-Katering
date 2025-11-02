// Smooth scroll tombol "Pesan Sekarang"
document.addEventListener("DOMContentLoaded", function () {
  const btnPesan = document.querySelector(".hero .btn");
  if (btnPesan) {
    btnPesan.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector("#kategori");
      target.scrollIntoView({ behavior: "smooth" });
    });
  }
});

// Efek animasi muncul saat di-scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade").forEach((el) => observer.observe(el));
