const twoBox1 = document.querySelector('.twoBox-1');
const twoBox2 = document.querySelector('.twoBox-2');
const imgHero = document.querySelector('.imgHero');
const tower = document.querySelector('.tower-section');



const capturedBg = document.createElement('div'); // Create a container for the captured image
const capturedImage = new Image(); // Create an image element to display the captured image

// Set up the container and image styles
capturedBg.classList.add('bg-captured');
capturedImage.src = imgHero.src;

// Append the captured image container to the DOM
twoBox1.appendChild(capturedBg);
capturedBg.appendChild(capturedImage);



const capturedBg2 = document.createElement('div'); // Create a container for the captured image
const capturedImage2 = new Image(); // Create an image element to display the captured image

// Set up the container and image styles
capturedBg2.classList.add('bg-captured');
capturedImage2.src = imgHero.src;

// Append the captured image container to the DOM
twoBox2.appendChild(capturedBg2);
capturedBg2.appendChild(capturedImage2);


const capturedBg3 = document.createElement('div'); // Create a container for the captured image
const capturedImage3 = new Image(); // Create an image element to display the captured image

// Set up the container and image styles
capturedBg3.classList.add('bg-captured');
capturedImage3.src = imgHero.src;

// Append the captured image container to the DOM
tower.appendChild(capturedBg3);
capturedBg3.appendChild(capturedImage3);








twoBox1.addEventListener('mouseover', () => {
    twoBox2.classList.add('grayscale');
    imgHero.classList.add('grayscale');
    tower.classList.add('grayscale');
    capturedBg.style.display = 'block'; // Show the captured image container
});

twoBox1.addEventListener('mouseout', () => {
    twoBox2.classList.remove('grayscale');
    imgHero.classList.remove('grayscale');
    tower.classList.remove('grayscale');
    capturedBg.style.display = 'none'; // Hide the captured image container
});

twoBox2.addEventListener('mouseover', () => {
    twoBox1.classList.add('grayscale');
    imgHero.classList.add('grayscale');
    tower.classList.add('grayscale');
    capturedBg2.style.display = 'block'; // Show the captured image container
});

twoBox2.addEventListener('mouseout', () => {
    twoBox1.classList.remove('grayscale');
    imgHero.classList.remove('grayscale');
    tower.classList.remove('grayscale');
    capturedBg2.style.display = 'none'; // Hide the captured image container
});

tower.addEventListener('mouseover', () => {
    twoBox1.classList.add('grayscale');
    imgHero.classList.add('grayscale');
    twoBox2.classList.add('grayscale');
    capturedBg3.style.display = 'block'; // Show the captured image container
});

tower.addEventListener('mouseout', () => {
    twoBox1.classList.remove('grayscale');
    imgHero.classList.remove('grayscale');
    twoBox2.classList.remove('grayscale');
    capturedBg3.style.display = 'none'; // Hide the captured image container
});


