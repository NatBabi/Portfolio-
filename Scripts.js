function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function openModal() {
  document.getElementById('contactModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('contactModal').style.display = 'none';
}

function downloadCV() {
  const link = document.createElement('a');
  link.href = 'My-Resume.pdf';
  link.download = 'My-Resume.pdf';
  link.click();
}
