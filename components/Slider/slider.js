const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");

sliderValue.innerText = `₹${Math.floor(slider.max - slider.min)/2}`

slider.addEventListener("input",() => {
    sliderValue.innerText = `₹${slider.value}`;
})