const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

const TOTAL = 15;
const petalArray = [];

const petalImg = new Image();
petalImg.src = './img/petal.png';
petalImg.addEventListener('load', () => {
  for (let i = 0; i < TOTAL; i++) {
    petalArray.push(new Petal());
  }
  render();
});

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  petalArray.forEach(petal => petal.animate());
  window.requestAnimationFrame(render);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let mouseX = 0;
function touchHandler(e) {
  mouseX = (e.clientX || e.touches[0].clientX) / window.innerWidth;
}
window.addEventListener('mousemove', touchHandler);
window.addEventListener('touchmove', touchHandler);

// Petal class
class Petal {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height * 2 - canvas.height;
   this.w = 40 + Math.random() * 15;
    this.h = 35 + Math.random() * 5;
    this.opacity = this.w / 20;
    this.flip = Math.random();

    this.xSpeed = 1 + Math.random() * 2;
    this.ySpeed = 0.8+ Math.random() * 0.2;
    this.flipSpeed = Math.random() * 0.03;
  }

  draw() {
    if (this.y > canvas.height || this.x > canvas.width) {
      this.x = -petalImg.width;
      this.y = Math.random() * canvas.height * 2 - canvas.height;
      this.xSpeed = 1 + Math.random() * 2;
      this.ySpeed = 0.5 + Math.random() * 1;
      this.flip = Math.random();
    }
    ctx.globalAlpha = this.opacity;
    ctx.drawImage(
        petalImg,
        this.x,
        this.y,
        this.w * (0.6 + Math.abs(Math.cos(this.flip)) / 3),
        this.h * (0.8 + Math.abs(Math.sin(this.flip)) / 5));
  }

  animate() {
    this.x += this.xSpeed + mouseX * 0.5;
    this.y += this.ySpeed + mouseX * 0.2;
    this.flip += this.flipSpeed;
    this.draw();
  }}

$(function(){
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 800) {
      $('.wrap-nav').addClass('fixed');
    } else {
      $('.wrap-nav').removeClass('fixed');
    }
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.btn-top').fadeIn();
    } else {
      $('.btn-top').fadeOut();
    }
  });

  $('.btn-top').click(function () {
    $('body, html').animate({ scrollTop: 0 }, 400);
    return false;
  });
});