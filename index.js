const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.offsetWidth;

// const height = canvas.height = (() => {
//   let temp = document.body.offsetWidth;
//   if(temp >= 1500){
//     return 1;
//   }
//   else if(temp < 1500 || temp >= 1400){
//     return 5;
//   }
// });
const height = (document.body.offsetHeight < 700 ? 1 : 10);
const h = canvas.height = document.body.offsetHeight/height;
// console.log(height);

const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

function matrix () {
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);
  
  ctx.fillStyle = 'rgba(0,128,128,1)';
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