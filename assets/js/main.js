document.querySelectorAll('.project .btn').forEach((button) => {
  button.addEventListener('click', () => {
    button.closest('.project').querySelector('.overlay').style.display =
      'block';
  });
});

document.querySelectorAll('.overlay .close').forEach((button) => {
  button.addEventListener('click', () => {
    button.closest('.overlay').style.display = 'none';
  });
});

document.querySelectorAll('.smallImage').forEach((image) => {
  image.addEventListener('click', () => {
    image.closest('.project').querySelector('.overlay').style.display = 'block';
  });
});
