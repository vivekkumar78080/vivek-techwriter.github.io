const cursor = document.querySelector('.cursor');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// Track mouse position
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

// Function to create smoke at cursor position
function createSmoke() {
  const smoke = document.createElement('div');
  smoke.classList.add('smoke');
  smoke.style.left = mouseX + 'px';
  smoke.style.top = mouseY + 'px';
  document.body.appendChild(smoke);

  // Remove after animation
  setTimeout(() => {
    smoke.remove();
  }, 2000);
}

// Keep generating smoke every 150ms
setInterval(createSmoke, 150);














const text = "Hi! I'm Vivek Kumar"; // heading text
const heading = document.getElementById('auto-heading');
let index = 0;
let typing = true; // true = typing, false = deleting

function type() {
  if (typing) {
    if (index < text.length) {
      heading.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 150); // speed of typing
    } else {
      typing = false;
      setTimeout(type, 1000); // pause after typing complete (1 sec)
    }
  } else {
    if (index > 0) {
      heading.innerHTML = text.substring(0, index - 1);
      index--;
      setTimeout(type, 100); // speed of deleting
    } else {
      typing = true;
      setTimeout(type, 500); // pause before typing again
    }
  }
}

// Start typing on page load
window.onload = type;
