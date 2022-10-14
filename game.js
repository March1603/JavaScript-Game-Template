const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.height = 576;
canvas.width = 1024;

c.fillRect(0, 0, canvas.width, canvas.height);
class sprite {
  constructor({ position, vari, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.vari = vari;
  }
  draw() {
    c.fillStyle = "#ffffff";
    c.fillRect(
      this.position.x,
      this.position.y,
      this.vari.width,
      this.vari.height
    );
  }
  update() {
    this.draw();
    this.position.y += this.velocity.y;
    if (this.position.y < 0) {
      this.position.y = 0;
    } else if (this.position.y > canvas.height - this.vari.height) {
      this.position.y = canvas.height - this.vari.height;
    }
  }
}

const p1 = new sprite({
  position: {
    x: 0,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  vari: {
    width: 20,
    height: 100,
  },
});

const p2 = new sprite({
  position: {
    x: 1004,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  vari: {
    width: 20,
    height: 100,
  },
});

function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = "#000000";
  c.fillRect(0, 0, canvas.width, canvas.height);
  p1.update();
  p2.update();
}
animate();
