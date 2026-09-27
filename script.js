const shapesPalette = document.getElementById("shapesPalette");
const bgPalette = document.getElementById("bgPalette");
const shapes = document.querySelectorAll(".shape");
const randomBtnShapes = document.getElementById("randomBtnShapes");
const randomBtnBg = document.getElementById("randomBtnBg");

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// верхняя палитра - клик по цвету меняет цвет фигур
shapesPalette.querySelectorAll(".color[data-color]").forEach(function (colorEl) {
  colorEl.addEventListener("click", function () {
    let color = colorEl.getAttribute("data-color");
    shapes.forEach(function (shape) {
      shape.style.background = color;
    });
  });
});

// нижняя палитра - клик по цвету меняет фон страницы
bgPalette.querySelectorAll(".color[data-color]").forEach(function (colorEl) {
  colorEl.addEventListener("click", function () {
    let color = colorEl.getAttribute("data-color");
    document.body.style.background = color;
  });
});

// случайный цвет для фигур
randomBtnShapes.addEventListener("click", function () {
  let color = randomColor();
  shapes.forEach(function (shape) {
    shape.style.background = color;
  });
});

// случайный цвет для фона
randomBtnBg.addEventListener("click", function () {
  let color = randomColor();
  document.body.style.background = color;
});
