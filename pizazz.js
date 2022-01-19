const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) { // generates random values from hex array which is stored in hexColor variable
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;   // prints the hexColor variable to .color => <span> element
    document.body.style.backgroundColor = hexColor; // changes the body background color to be hexColor printed
})

function getRandomNumber() {    // generates a random value between 0 - hex array length
    return Math.floor(Math.random() * hex.length);
}