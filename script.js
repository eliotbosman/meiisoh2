const imagesArray = [
    'img/dognet.jpg',
    'img/rednet.jpg',
    'img/dognet.jpg',
    'img/rednet.jpg',
    'img/dognet.jpg',
    'img/rednet.jpg',
    'img/dognet.jpg',
    'img/rednet.jpg',
    'img/dognet.jpg',
    'img/rednet.jpg',
    // Add more image filenames as needed.
  ];
  
  const imageContainer = document.getElementById('imageContainer');
  
  // Function to generate a random number between min and max (inclusive).
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to generate a random position for the image within the container.
  function getRandomPosition() {
    const containerWidth = imageContainer.offsetWidth;
    const containerHeight = imageContainer.offsetHeight;
    const randomX = getRandomNumber(0, containerWidth);
    const randomY = getRandomNumber(0, containerHeight);
    return { x: randomX, y: randomY };
  }
  
  // Function to add new images to the image container.
  function addImagesToContainer() {
    const randomImageIndex = getRandomNumber(0, imagesArray.length - 1);
    const imagePath = imagesArray[randomImageIndex];
    const image = new Image();
    image.src = imagePath;
  
    const position = getRandomPosition();
    image.style.position = 'absolute';
    image.style.left = `${position.x}px`;
    image.style.top = `${position.y}px`;
  
    // Set image opacity to 1 (no transparency)
    image.style.opacity = 1;
  
    imageContainer.appendChild(image);
  }
  
  // Add new images every 320 milliseconds for a more continuous overlay effect.
  setInterval(addImagesToContainer, 200);
  