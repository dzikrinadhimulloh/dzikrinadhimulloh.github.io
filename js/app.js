const projects = [
  { image: 'images/antec.png', url: 'https://www.antec.com.au/', name: 'Antec', type: 'Industrial &middot; WordPress' },
  { image: 'images/caslec.png', url: 'https://caslec.com.au/', name: 'Caslec Electrical & Data', type: 'Commercial &middot; WordPress' },
  { image: 'images/furniture-freighters.png', url: 'https://furniturefreighters.com.au/', name: 'Furniture Freighters', type: 'Services &middot; WordPress' },
  { image: 'images/service-today.png', url: 'https://www.servicetoday.com.au/', name: 'Service Today', type: 'Home Services &middot; WordPress' },
  { image: 'images/wurkbox.png', url: 'https://wurkbox.com.au/', name: 'Wurkbox', type: 'SaaS &middot; WordPress' },
  { image: 'images/daily-joy.png', url: 'https://www.daily-joy.org/', name: 'Daily Joy', type: 'Wellbeing &middot; WordPress' },
  { image: 'images/posterhouse.png', url: 'https://posterhouse.org/', name: 'Poster House', type: 'Museum &middot; WordPress' },
  { image: 'images/mpc.png', url: 'https://www.mpc.id/', name: 'MPC', type: 'Organization &middot; WordPress' },
  { image: 'images/buffalobayou.png', url: 'https://buffalobayou.org/', name: 'Buffalo Bayou', type: 'Non-profit &middot; WordPress' },
  { image: 'images/einhorn.cornell.png', url: 'https://einhorn.cornell.edu/', name: 'Einhorn Collaborative', type: 'Education &middot; WordPress' }
];

const container = document.querySelector('#porto-container');
container.innerHTML = projects.map((project, index) => `
  <article class="project-card fade-up ${index % 3 === 0 ? 'project-featured' : ''}">
    <a href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${project.name}">
      <div class="project-image"><img src="${project.image}" alt="${project.name} website preview" loading="lazy"></div>
      <div class="project-meta"><div><p>${project.type}</p><h3>${project.name}</h3></div><span aria-hidden="true">&nearr;</span></div>
    </a>
  </article>`).join('');

document.querySelector('#year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.fade-up').forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  observer.observe(item);
});
