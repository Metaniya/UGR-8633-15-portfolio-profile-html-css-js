document.addEventListener('DOMContentLoaded', function() {
  // Existing modal functionality
  const connectBtn = document.getElementById("connect-btn");
  const modal = document.getElementById("connect-modal");
  const closeModal = document.getElementById("close-modal");

  if (connectBtn && modal && closeModal) {
    connectBtn.addEventListener("click", () => {
      modal.style.display = "flex"; // Show the modal
    });

    closeModal.addEventListener("click", () => {
      modal.style.display = "none"; // Hide the modal
    });

    // Optional: Close modal when clicking outside it
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  // Image carousel functionality
  const images = document.querySelectorAll(".image-container");
  const prevButton = document.querySelector(".prev-btn");
  const nextButton = document.querySelector(".next-btn");

  if (images.length > 0 && prevButton && nextButton) {
    let currentIndex = 0;

    function updateImage() {
      images.forEach((img, index) => {
        img.classList.toggle("active", index === currentIndex);
      });
    }

    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
    });

    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    });

    updateImage(); // Initialize carousel
  }

  // Hamburger menu functionality
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  const body = document.body;

  if (hamburger && nav) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
      body.classList.toggle('menu-open');
    });

    // Close menu when a link is clicked
    const menuLinks = document.querySelectorAll('nav ul.menu li a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        body.classList.remove('menu-open');
      });
    });
  }
});

