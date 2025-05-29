document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
  });
});


// === TESTIMONIAL SLIDER LOGIC ===
const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function showTestimonial(i) {
  testimonials.forEach((t, idx) => {
    t.classList.remove("active");
    if (idx === i) {
      t.classList.add("active");
    }
  });
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
});

// Auto-play every 7 seconds
setInterval(() => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}, 7000);


// === WHATSAPP FORM INTEGRATION ===
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  const fullMessage = `Hello Green Rangers FC, my name is ${name}.%0ASubject: ${subject}%0A${message}`;
  const phoneNumber = '96879710779'; // Replace with your WhatsApp number (Nigeria format, no + or 0)

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
  window.open(whatsappURL, '_blank');
});