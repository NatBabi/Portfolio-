function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function openModal(imageSrc, title, description, techStack) {
  const modal = document.getElementById('portfolioModal');
  document.getElementById('modalImage').src = imageSrc;
  document.querySelector('.modal-content h2').textContent = title;
  document.getElementById('modalDescription').textContent = description;

  // Populate tech stack badges
  const techStackContainer = document.getElementById('modalTechStack');
  techStackContainer.innerHTML = ''; // Clear previous badges
  techStack.split(', ').forEach((tech) => {
    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = tech;
    techStackContainer.appendChild(badge);
  });

  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('portfolioModal');
  modal.style.display = 'none';
}

function downloadCV() {
  const link = document.createElement('a');
  link.href = 'My-Resume.pdf';
  link.download = 'My-Resume.pdf';
  link.click();
}

function switchTab(tabName) {
  document
    .querySelectorAll('.tabs button')
    .forEach((btn) => btn.classList.remove('active'));
  document
    .querySelectorAll('.portfolio, .skills')
    .forEach((tab) => tab.classList.remove('active'));
  document.querySelector(`#${tabName}`).classList.add('active');
  event.target.classList.add('active');
}
