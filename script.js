// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// Mobile menu
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
mobileToggle.addEventListener('click', () => {
  mobileToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Dark mode
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}
themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  if (current === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  }
});

// Search
const searchToggle = document.getElementById('searchToggle');
const searchModal = document.getElementById('searchModal');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

const searchableContent = [
  {title:'Wedding Planning', section:'Services', url:'#services'},
  {title:'Birthday Parties', section:'Services', url:'#services'},
  {title:'Corporate Events', section:'Services', url:'#services'},
  {title:'Conferences', section:'Services', url:'#services'},
  {title:'Product Launches', section:'Services', url:'#services'},
  {title:'Baby Showers', section:'Services', url:'#services'},
  {title:'Bridal Showers', section:'Services', url:'#services'},
  {title:'Anniversary Celebrations', section:'Services', url:'#services'},
  {title:'Luxury Private Events', section:'Services', url:'#services'},
  {title:'Event Decoration', section:'Services', url:'#services'},
  {title:'Venue Styling', section:'Services', url:'#services'},
  {title:'Event Coordination', section:'Services', url:'#services'},
  {title:'Vendor Management', section:'Services', url:'#services'},
  {title:'Budget Planning', section:'Services', url:'#services'},
  {title:'Event Logistics', section:'Services', url:'#services'},
  {title:'Day-of Coordination', section:'Services', url:'#services'},
  {title:'Destination Events', section:'Services', url:'#services'},
  {title:'Book Consultation', section:'Booking', url:'#booking'},
  {title:'Pricing Packages', section:'Pricing', url:'#pricing'},
  {title:'About FIEL Events', section:'About', url:'#about'},
  {title:'Portfolio', section:'Portfolio', url:'#portfolio'},
  {title:'Testimonials', section:'Testimonials', url:'#testimonials'},
  {title:'Contact Us', section:'Contact', url:'#contact'},
  {title:'FAQ', section:'FAQ', url:'#faq'},
  {title:'Blog', section:'Blog', url:'#blog'}
];

searchToggle.addEventListener('click', () => {
  searchModal.classList.add('active');
  setTimeout(() => searchInput.focus(), 100);
});
searchClose.addEventListener('click', () => {
  searchModal.classList.remove('active');
  searchInput.value = '';
  searchResults.innerHTML = '';
});
searchModal.addEventListener('click', (e) => {
  if (e.target === searchModal) {
    searchModal.classList.remove('active');
    searchInput.value = '';
    searchResults.innerHTML = '';
  }
});
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();
  if (query.length < 2) {
    searchResults.innerHTML = '';
    return;
  }
  const matches = searchableContent.filter(item =>
    item.title.toLowerCase().includes(query) || item.section.toLowerCase().includes(query)
  );
  if (matches.length === 0) {
    searchResults.innerHTML = '<p style="text-align:center;color:rgba(255,255,255,0.6)">No results found</p>';
    return;
  }
  searchResults.innerHTML = matches.map(m => `
    <div class="search-result-item" onclick="window.location.hash='${m.url}'; document.getElementById('searchModal').classList.remove('active');">
      <h5>${m.title}</h5>
      <p>${m.section}</p>
    </div>
  `).join('');
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
reveals.forEach(el => revealObserver.observe(el));

// Portfolio filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    portfolioItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
        setTimeout(() => item.style.opacity = '1', 10);
      } else {
        item.style.opacity = '0';
        setTimeout(() => item.style.display = 'none', 300);
      }
    });
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
portfolioItems.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});
lightboxClose.addEventListener('click', () => lightbox.classList.remove('active'));
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.classList.remove('active');
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    lightbox.classList.remove('active');
    searchModal.classList.remove('active');
  }
});

// Swiper
new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: { delay: 5000, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

// FAQ
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const wasActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!wasActive) item.classList.add('active');
  });
});

// Form validation
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  const required = bookingForm.querySelectorAll('[required]');
  required.forEach(field => {
    const group = field.closest('.form-group');
    if (!field.value.trim() || (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value))) {
      group.classList.add('error');
      valid = false;
    } else {
      group.classList.remove('error');
    }
  });
  if (valid) {
    const btn = bookingForm.querySelector('.form-submit');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Consultation Booked Successfully!';
    btn.style.background = '#27ae60';
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      bookingForm.reset();
    }, 3000);
  }
});

// Newsletter
document.getElementById('newsletterForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.innerHTML = '<i class="fas fa-check"></i>';
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-paper-plane"></i>';
    e.target.reset();
    alert('Thank you for subscribing to FIEL Events!');
  }, 1500);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});