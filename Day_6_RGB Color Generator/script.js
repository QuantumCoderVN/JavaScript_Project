const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');

const redValue = document.getElementById('redValue');
const greenValue = document.getElementById('greenValue');
const blueValue = document.getElementById('blueValue');

const colorBox = document.getElementById('color-box');
const copyButton = document.getElementById('copyButton');
const inputTypeRGBValue = document.getElementById('inputType');
const resert = document.getElementById('reset');

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);
copyButton.addEventListener('click', copyColor);
resert.addEventListener('click', () => {
    redSlider.value = 0;
    greenSlider.value = 0;
    blueSlider.value = 0;
    updateColor();
});

function updateColor() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;
    //console.log(red, green, blue);

    const rgbValue = `rgb(${red}, ${green}, ${blue})`;
    //console.log(rgbValue);
    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;

    inputTypeRGBValue.textContent = rgbValue;
    colorBox.style.backgroundColor = rgbValue;
}

updateColor();

function copyColor() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    const rgbValue = `rgb(${red}, ${green}, ${blue})`;
    navigator.clipboard.writeText(rgbValue)
        .then(() => {
            alert('Color copied to clipboard' + rgbValue);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}

