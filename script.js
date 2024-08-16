const gradientGenerator = document.getElementById('gradient-generator');
const gradientBox = document.querySelector('.gradient-box');
const newGradientButton = document.getElementById('new-gradient-button');
const copyButton = document.getElementById('copy-button');
const cssCodeElement = document.getElementById('css-code');
const copySuccess = document.getElementById('copy-success');

function generateRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

function getRandomDirection() {
  const directions = [
    'to right', 'to left', 'to top', 'to bottom',
    'to right top', 'to right bottom', 'to left top', 'to left bottom',
    `${Math.floor(Math.random() * 360)}deg`
  ];
  return directions[Math.floor(Math.random() * directions.length)];
}

function generateRandomGradient() {
  const color1 = generateRandomColor();
  const color2 = generateRandomColor();
  const direction = getRandomDirection();
  return `linear-gradient(${direction}, ${color1}, ${color2})`;
}

function handleNewGradient() {
  gradientBox.style.background = generateRandomGradient();
  cssCodeElement.textContent = `background: ${gradientBox.style.background};`;
}

function handleCopyCSS() {
  const cssCode = cssCodeElement.textContent;
  navigator.clipboard.writeText(cssCode)
    .then(() => {
      copySuccess.textContent = 'CSS copied!';
      setTimeout(() => {
        copySuccess.textContent = '';
      }, 2000);
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
    });
}

// Initialize the gradient generator
gradientBox.style.background = generateRandomGradient();
cssCodeElement.textContent = `background: ${gradientBox.style.background};`;

// Add event listeners
newGradientButton.addEventListener('click', handleNewGradient);
copyButton.addEventListener('click', handleCopyCSS);
