const button = document.getElementById('evasiveBtn');
const scroll = document.getElementById('scroll');
const message = document.getElementById('message');
const violin = document.getElementById('violin');

let isClicked = false;

button.addEventListener('mouseover', (e) => {
  if (window.innerWidth <= 768) return; // Don't move on mobile

  const offset = 100;
  const newX = Math.random() * (window.innerWidth - offset);
  const newY = Math.random() * (window.innerHeight - offset);

  button.style.position = 'absolute';
  button.style.left = `${newX}px`;
  button.style.top = `${newY}px`;
});

button.addEventListener('click', () => {
  if (isClicked) return;
  isClicked = true;

  // Play sound
  violin.volume = 0.5;
  violin.play();

  // Fade out scroll, show message
  scroll.style.opacity = 0;
  setTimeout(() => {
    scroll.style.display = 'none';
    message.classList.add('show');
  }, 1000);
});
