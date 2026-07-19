 const openBtn = document.getElementById('openMenuBtn');
  const closeBtn = document.getElementById('closeMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mainMenu = document.getElementById('mainMenu');
openBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');

  // force the browser to register "hidden removed" as one frame first
  mobileMenu.offsetHeight; // reading this forces a reflow

  mainMenu.classList.remove('-translate-x-full');
});

closeBtn.addEventListener('click', () => {
  mainMenu.classList.add('-translate-x-full');

  setTimeout(() => {
    mobileMenu.classList.add('hidden');
  }, 100); // match your duration-500
});