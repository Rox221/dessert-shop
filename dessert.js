document.addEventListener('click', function(event) {
  const clickedElement = event.target;
  const isImageItem = clickedElement.closest('.image-item');
  const allImageItems = document.querySelectorAll('.image-item');

  if (!isImageItem) {
    allImageItems.forEach(item => {
      item.classList.remove('fade-out');
      item.querySelector('.addToCartBtn').classList.add('hidden');
    });
  }
});

const imageGrid = document.getElementById('imageGrid');

imageGrid.addEventListener('click', function(event) {
  const clickedElement = event.target;
  const imageItem = clickedElement.closest('.image-item');

  if (imageItem) {
    imageItem.classList.toggle('fade-out');
    const addToCartBtn = imageItem.querySelector('.addToCartBtn');
    addToCartBtn.classList.toggle('hidden');
  }
});


