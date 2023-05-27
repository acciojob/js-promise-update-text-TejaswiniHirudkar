//your JS code here. If required.
function updateElementWithText() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const text = 'Hello, world!';
      resolve(text);
    }, 1000);
  });
}

// Function to update HTML element with resolved text
function setTextToElement(elementId, text) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = text;
  }
}

// Usage
const outputElementId = 'output';

updateElementWithText().then((text) => {
  setTextToElement(outputElementId, text);
});