const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.offsetWidth;

const height = (document.body.offsetHeight < 700 ? 1 : 10);
const h = canvas.height = document.body.offsetHeight / height;

const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

function matrix() {
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

// Scroll Reveal Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.project-card, .education-details > div, .skills-list > div, .about-sub-section').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// GitHub Integration
async function fetchGitHubProjects() {
  const container = document.getElementById('github-projects');
  if (!container) return;

  try {
    const response = await fetch('https://api.github.com/users/Pranav1326/repos?sort=updated&per_page=6');
    const repos = await response.json();

    container.innerHTML = '';
    repos.forEach(repo => {
      const card = document.createElement('div');
      card.className = 'project-card reveal';

      const updateDate = new Date(repo.updated_at).toLocaleDateString();

      card.innerHTML = `
                <h1>${repo.name.replace(/-/g, ' ')}</h1>
                <div class="description-div">
                    <h4>Description: </h4>
                    <p>${repo.description || 'No description provided.'}</p>
                </div>
                <div class="technologies-div">
                    <h4>Language: </h4>
                    <p>${repo.language || 'N/A'}</p>
                </div>
                <div class="links-div">
                    <h4>Updated: </h4> <p>${updateDate}</p>
                    <br><br>
                    <h4>Github: </h4>
                    <a href="${repo.html_url}" target="_blank" style="word-break: break-all;">${repo.html_url}</a>
                </div>
            `;
      container.appendChild(card);
      observer.observe(card);
    });
  } catch (error) {
    container.innerHTML = '<p>Failed to load GitHub projects.</p>';
    console.error('Error fetching GitHub repos:', error);
  }
}

fetchGitHubProjects();

