'use strict';

const largeImg = document.querySelector('.gallery__large-img');

for (const link of document.querySelectorAll('.list-item__link')) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    largeImg.setAttribute('src', link.href);
  });
}
