const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.querySelectorAll(".jsColor");
const range = document.querySelector("#jsRange");
const mode = document.getElementById("jsMode");

canvas.width = 900;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.fillStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

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

const onClick = e => {
  if (filling) {
    ctx.fillRect(0, 0, 900, 700);
  }
};

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", () => {
    painting = false;
  });
  canvas.addEventListener("click", onClick);
}

const changeColor = e => {
  ctx.strokeStyle = e.target.style.backgroundColor;
  ctx.fillStyle = e.target.style.backgroundColor;
};

const handleRange = e => {
  ctx.lineWidth = e.target.value;
};

const handleModeClick = e => {
  filling = !filling;
  if (filling) {
    mode.innerText = "Stroke";
  } else {
    mode.innerText = "FILL";
  }
};

colors.forEach(c => c.addEventListener("click", changeColor));

if (range) {
  range.addEventListener("input", handleRange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}
