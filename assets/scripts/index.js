'use strict';

const sayMessage = () => console.log('Я учу JavaScript!');

sayMessage();

const galleryButtons = document.querySelectorAll('.gallery__button');
galleryButtons.forEach(button =>
  button.addEventListener('click', changeGalleryImage)
);

function changeGalleryImage() {
  const image = document.querySelector('.gallery__img');
  let source = image.getAttribute('src');
  const index = source.indexOf('№');

  if (index === -1) {
    console.log('Неверно прописано имя файла. Должен содержаться симлов №');
    return;
  }

  const endSourceString = source.slice(index + 1);
  let imageNumber = parseFloat(endSourceString); //находим порядковый номер изображения в имени файла

  if (this.id === 'next' && imageNumber < 4) {
    source = `./assets/images/flower-№${++imageNumber}.jpg`;
  } else if (this.id === 'previous' && imageNumber > 1) {
    source = `./assets/images/flower-№${--imageNumber}.jpg`;
  }

  image.src = source;
}
