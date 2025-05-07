// Efek mengetik untuk elemen .code
const codeElement = document.querySelector('.code');
const codeText = codeElement.innerHTML;
codeElement.innerHTML = '';

let i = 0;
function typeEffect() {
    if (i < codeText.length) {
        codeElement.innerHTML += codeText.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

window.onload = typeEffect;
