document.querySelectorAll('[data-scroll]').forEach((button) => {
  button.addEventListener('click', () => document.getElementById(button.dataset.scroll).scrollIntoView({ behavior: 'smooth' }));
});

let command = '';
window.addEventListener('keydown', (event) => {
  if (event.target.matches('input, textarea')) return;
  command = (command + event.key.toLowerCase()).slice(-20);
  if (command.includes('sudo hire ketan')) {
    const hint = document.querySelector('.hint');
    hint.textContent = 'Permission granted. Let’s build something.';
    hint.style.color = '#c7ff3e';
    command = '';
  }
});

const clock = document.querySelector('.system-top span:last-child');
if (clock) setInterval(() => { clock.textContent = new Date().toLocaleTimeString('en-GB', { hour12: false }); }, 1000);
