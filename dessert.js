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

var asyncImages = document.querySelectorAll('.async-image');

function loadImageAsync(img) {
    var imagePath = img.dataset.src;
    console.log('Attempting to load image: ' + imagePath);
    
    var tempImg = new Image();
    tempImg.src = imagePath;
    tempImg.onload = function() {
        img.src = imagePath;
        console.log('Image loaded successfully: ' + imagePath);
    };
    tempImg.onerror = function() {
        console.error('Error loading image: ' + imagePath);
    };
}

// Call the function to load images asynchronously for each img tag
asyncImages.forEach(function(img) {
    loadImageAsync(img);
});
      
