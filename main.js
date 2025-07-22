const canvas = document.getElementById('ballCanvas');  // fixed typo: getElemetnById → getElementById
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height / 2;
let radius = 20;
let dx = 2;
let dy = 2;

let ballColor = '#00ffff';

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = ballColor;
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);  // fixed typo: wdith → width

  drawBall();

  if (x + radius > canvas.width || x - radius < 0) {
    dx = -dx;
  }

  if (y + radius > canvas.height || y - radius < 0) {
    dy = -dy;
  }

  x += dx;
  y += dy;

  requestAnimationFrame(draw);
}

draw();
