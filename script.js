
const keyContentElements = document.querySelectorAll('.key-content');

window.addEventListener('keydown', (event) => {
    
    const { key, code, keyCode } = event;

    keyContentElements[0].textContent = key;
    keyContentElements[1].textContent = code;
    keyContentElements[2].textContent = keyCode;
});
