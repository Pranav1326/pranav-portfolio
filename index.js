const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.offsetWidth;

const height = (document.body.offsetHeight < 700 ? 1 : 10);
const h = canvas.height = document.body.offsetHeight/height;

const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

function matrix () {
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);
  const lightFontColor = 'rgba(0, 199, 199, 0.7)';
  ctx.fillStyle = lightFontColor;
  ctx.font = '15pt monospace';
  
  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 128);
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });
}

setInterval(matrix, 50);

const hamMenuIcon = document.getElementById('hemMenu');
const ulLinks = document.getElementsByClassName('ulLinks')[0];

ulLinks.addEventListener('click', () => {
  ulLinks.classList.remove('active');
})

hamMenuIcon.addEventListener('click', () => {
  ulLinks.classList.toggle('active');
});

const colorPallets = {
  green: {
    fontColor: 'rgb(0, 199, 63)',
    navColor: 'rgba(2, 72, 0, 0.6)',
    heroText: 'rgba(0, 128, 51, 0.5)'
  },
  violet: {
    fontColor: 'rgb(98, 0, 255)',
    navColor: 'rgba(0, 72, 72, 0.6)',
    heroText: 'rgba(0, 128, 128, 0.5)'
  }
}
