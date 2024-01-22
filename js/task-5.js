function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

document.querySelector(".change-color").addEventListener("click", function () {
  var randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;

  document.querySelector(".color").textContent = randomColor;
});
