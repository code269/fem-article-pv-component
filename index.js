const openShareBtn = document.getElementById('open-share');
const closeShareBtn = document.getElementById('close-share');
const popUp = document.querySelector('.popup');

openShareBtn.addEventListener('click', () => {
  popUp.style.display = 'flex';
});

closeShareBtn.addEventListener('click', () => {
  popUp.style.display = 'none';
});
