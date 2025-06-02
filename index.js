const openShareBtn = document.getElementById('open-share');
const closeShareBtn = document.getElementById('close-share');
const popUp = document.querySelector('.popup');

openShareBtn.addEventListener('click', () => {
  popUp.classList.toggle('visible');
});

closeShareBtn.addEventListener('click', () => {
  popUp.classList.toggle('visible');
});
