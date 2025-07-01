const openShareBtn = document.getElementById('open-share');
const closeShareBtn = document.getElementById('close-share');
const popUp = document.querySelector('.popup');
const buttonImg = document.querySelector('.profile__share-button');

openShareBtn.addEventListener('click', () => {
  popUp.classList.toggle('visible');
  openShareBtn.classList.toggle('button--dark');
  buttonImg.classList.toggle('button__img--dark');
});

closeShareBtn.addEventListener('click', () => {
  popUp.classList.toggle('visible');
  openShareBtn.classList.toggle('button--dark');
  buttonImg.classList.toggle('button__img--dark');
});
