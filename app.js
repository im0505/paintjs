const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.querySelectorAll(".jsColor");

canvas.width = 900;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.linewith = 2.5;

let painting = false;

const startPainting = () => {};

const onMouseMove = e => {
  const x = e.offsetX;
  const y = e.offsetY;

  if (painting) {
    ctx.lineTo(x, y);
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.moveTo(x, y);
  }
};

const onMouseDown = e => {
  painting = true;
};

const onMouseUp = e => {
  painting = false;
};

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", () => {
    painting = false;
  });
}

const changeColor = e => {
  ctx.strokeStyle = e.target.style.backgroundColor;
};

colors.forEach(c => c.addEventListener("click", changeColor));
