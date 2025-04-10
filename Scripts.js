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
