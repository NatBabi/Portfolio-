// === Theme Toggle ===
function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
}

// === Portfolio Modal ===
function openModal(imageSrc, title, description, techStack, githubLink) {
  const modal = document.getElementById('portfolioModal');
  document.getElementById('modalImage').src = imageSrc;
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDescription').textContent = description;

  // Populate tech stack badges
  const techStackContainer = document.getElementById('modalTechStack');
  techStackContainer.innerHTML = '';
  techStack.split(', ').forEach((tech) => {
    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = tech;
    techStackContainer.appendChild(badge);
  });

  // Add GitHub link
  const githubLinkContainer = document.getElementById('modalGithubLink');
  githubLinkContainer.innerHTML = '';
  if (githubLink) {
    const link = document.createElement('a');
    link.href = githubLink;
    link.textContent = 'View on GitHub';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    githubLinkContainer.appendChild(link);
  }

  showModal(modal);
}

// === Contact Modal ===
function openContactModal() {
  const modal = document.getElementById('contactModal');
  if (modal) {
    clearFormErrors();
    showModal(modal);
  }
}

// === Generic Modal Helpers ===
function showModal(modal) {
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Focus the close button for keyboard accessibility
  const closeBtn = modal.querySelector('.close-button');
  if (closeBtn) closeBtn.focus();
}

function closeModal() {
  document.querySelectorAll('.modal').forEach((modal) => {
    modal.style.display = 'none';
  });
  document.body.style.overflow = '';
}

// Esc key closes any open modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Click outside modal content to dismiss
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    closeModal();
  }
});

// === Toast Notification ===
function showToast(message, duration = 3000) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

// === CV Download with Confirmation ===
function downloadCV() {
  const link = document.createElement('a');
  link.href = 'My-Resume.pdf';
  link.download = 'Natnael_Tilahun_Resume.pdf';
  link.click();
  showToast('Resume downloaded ✓');
}



// === Inline Form Validation ===
function validateField(field, errorEl) {
  let message = '';

  if (field.validity.valueMissing) {
    message = field.name === 'name' ? 'Please enter your name.'
      : field.name === 'email' ? 'Please enter your email address.'
      : 'Please enter your message.';
  } else if (field.validity.typeMismatch && field.type === 'email') {
    message = 'Please enter a valid email address (e.g. name@example.com).';
  } else if (field.validity.tooLong) {
    message = `Maximum ${field.maxLength} characters allowed.`;
  }

  errorEl.textContent = message;
  field.classList.toggle('invalid', !!message);
  return !message;
}

function clearFormErrors() {
  document.querySelectorAll('.field-error').forEach((el) => (el.textContent = ''));
  document.querySelectorAll('.invalid').forEach((el) => el.classList.remove('invalid'));
}

// Real-time inline validation on blur
document.addEventListener('DOMContentLoaded', () => {
  const nameField = document.getElementById('contactName');
  const emailField = document.getElementById('contactEmail');
  const messageField = document.getElementById('contactMessage');

  if (nameField) {
    nameField.addEventListener('blur', () =>
      validateField(nameField, document.getElementById('nameError'))
    );
  }
  if (emailField) {
    emailField.addEventListener('blur', () =>
      validateField(emailField, document.getElementById('emailError'))
    );
  }
  if (messageField) {
    messageField.addEventListener('blur', () =>
      validateField(messageField, document.getElementById('messageError'))
    );
  }
});

// === AJAX Form Submission ===
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameField = document.getElementById('contactName');
    const emailField = document.getElementById('contactEmail');
    const messageField = document.getElementById('contactMessage');
    const submitBtn = document.getElementById('submitBtn');

    // Validate all fields
    const nameValid = validateField(nameField, document.getElementById('nameError'));
    const emailValid = validateField(emailField, document.getElementById('emailError'));
    const messageValid = validateField(messageField, document.getElementById('messageError'));

    if (!nameValid || !emailValid || !messageValid) return;

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const formData = new FormData(form);
      const response = await fetch('https://formsubmit.co/ajax/ntile312@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        clearFormErrors();
        closeModal();
        showToast('Message sent successfully ✓');
      } else {
        showToast('Failed to send message. Please try again.');
      }
    } catch (error) {
      showToast('Network error. Please check your connection and try again.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
});

// === Initialize Swiper Carousel ===
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.portfolio-swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    initialSlide: 1
  });
});
