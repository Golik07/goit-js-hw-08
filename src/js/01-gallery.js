// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const fatherImages = document.querySelector('.gallery');
const imgMarkUp = onImagesCards(galleryItems);

function onImagesCards(imgs) {
  return imgs
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
    </li>
    `;
    })
    .join('');
}
fatherImages.insertAdjacentHTML('afterbegin', imgMarkUp);

fatherImages.addEventListener('click', openImgs);

function openImgs(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
