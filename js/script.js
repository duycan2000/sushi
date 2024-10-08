document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
  
    mobileMenuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Menu items data
    const menuItems = [
      {
        name: 'California Roll',
        description: 'Crab, avocado, and cucumber roll',
        price: 8.99,
        image: 'https://source.unsplash.com/400x300/?california-roll',
        category: 'rolls'
      },
      {
        name: 'Salmon Nigiri',
        description: 'Fresh salmon on top of seasoned rice',
        price: 6.99,
        image: 'https://source.unsplash.com/400x300/?salmon-nigiri',
        category: 'sushi'
      },
      {
        name: 'Tuna Sashimi',
        description: 'Thinly sliced raw tuna',
        price: 12.99,
        image: 'https://source.unsplash.com/400x300/?tuna-sashimi',
        category: 'sashimi'
      },
      {
        name: 'Dragon Roll',
        description: 'Eel, crab, cucumber topped with avocado',
        price: 14.99,
        image: 'https://source.unsplash.com/400x300/?dragon-roll',
        category: 'rolls'
      },
      {
        name: 'Vegetable Tempura',
        description: 'Assorted vegetables deep-fried in a light batter',
        price: 7.99,
        image: 'https://source.unsplash.com/400x300/?vegetable-tempura',
        category: 'sushi'
      },
      {
        name: 'Spicy Tuna Roll',
        description: 'Fresh tuna mixed with spicy mayo and cucumber',
        price: 9.99,
        image: 'https://source.unsplash.com/400x300/?spicy-tuna-roll',
        category: 'rolls'
      }
    ];
  
    // Function to create menu items
    function createMenuItems(items) {
      const menuContainer = document.querySelector('.menu__items');
      menuContainer.innerHTML = '';
      
      items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu__item');
        
        menuItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="menu__item-image">
          <div class="menu__item-content">
            <h3 class="menu__item-title">${item.name}</h3>
            <p class="menu__item-description">${item.description}</p>
            <span class="menu__item-price">$${item.price.toFixed(2)}</span>
          </div>
        `;
        
        menuContainer.appendChild(menuItem);
      });
    }
  
    // Initialize menu
    createMenuItems(menuItems);
  
    // Menu category filter
    const menuCategories = document.querySelectorAll('.menu__category');
    menuCategories.forEach(category => {
      category.addEventListener('click', () => {
        menuCategories.forEach(cat => cat.classList.remove('active'));
        category.classList.add('active');
        
        const selectedCategory = category.dataset.category;
        const filteredItems = selectedCategory === 'all' 
          ? menuItems 
          : menuItems.filter(item => item.category === selectedCategory);
        
        createMenuItems(filteredItems);
      });
    });
  
    // Gallery items
    const galleryItems = [
      'https://source.unsplash.com/400x400/?sushi-1',
      'https://source.unsplash.com/400x400/?sushi-2',
      'https://source.unsplash.com/400x400/?sushi-3',
      'https://source.unsplash.com/400x400/?sushi-4',
      'https://source.unsplash.com/400x400/?sushi-5',
      'https://source.unsplash.com/400x400/?sushi-6',
      'https://source.unsplash.com/400x400/?sushi-7',
      'https://source.unsplash.com/400x400/?sushi-8'
    ];
  
    // Function to create gallery items
    function createGalleryItems() {
      const galleryGrid = document.querySelector('.gallery__grid');
      
      galleryItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery__item');
        
        galleryItem.innerHTML = `<img src="${item}" alt="Sushi Gallery Image">`;
        
        galleryGrid.appendChild(galleryItem);
      });
    }
  
    // Initialize gallery
    createGalleryItems();
  
    // Testimonials data
    const testimonials = [
      {
        quote: "The best sushi I've ever had! The flavors are incredible and the presentation is beautiful.",
        author: "Emily Johnson",
        role: "Food Critic",
        avatar: "https://source.unsplash.com/100x100/?woman-1"
      },
      {
        quote: "Sushi Delight never disappoints. Their attention to detail and quality ingredients make every visit special.",
        author: "Michael Chen",
        role: "Regular Customer",
        avatar: "https://source.unsplash.com/100x100/?man-1"
      },
      {
        quote: "As a Japanese cuisine enthusiast, I can confidently say that Sushi Delight offers an authentic experience.",
        author: "Sarah Tanaka",
        role: "Food Blogger",
        avatar: "https://source.unsplash.com/100x100/?woman-2"
      }
    ];
  
    // Function to create testimonial slides
    function createTestimonialSlides() {
      const testimonialSlider = document.querySelector('.testimonials__slider');
      const testimonialNav = document.querySelector('.testimonials__nav');
      
      testimonials.forEach((testimonial, index) => {
        const slide = document.createElement('div');
        slide.classList.add('testimonials__slide');
        
        slide.innerHTML = `
          <p class="testimonials__quote">${testimonial.quote}</p>
          <div class="testimonials__author">
            <div class="testimonials__avatar">
              <img src="${testimonial.avatar}" alt="${testimonial.author}">
            </div>
            <div class="testimonials__name">${testimonial.author}</div>
            <div class="testimonials__role">${testimonial.role}</div>
          </div>
        `;
        
        testimonialSlider.appendChild(slide);
        
        const dot = document.createElement('div');
        dot.classList.add('testimonials__dot');
        if (index === 0) dot.classList.add('active');
        testimonialNav.appendChild(dot);
      });
    }
  
    // Initialize testimonials
    createTestimonialSlides();
  
    // Testimonial slider functionality
    const slides = document.querySelectorAll('.testimonials__slide');
    const dots = document.querySelectorAll('.testimonials__dot');
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach(slide => slide.style.display = 'none');
      dots.forEach(dot => dot.classList.remove('active'));
      
      slides[index].style.display = 'block';
      dots[index].classList.add('active');
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });
  
    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
  
    // Initialize first slide
    showSlide(currentSlide);
  
    // Form submission (you would typically send this data to a server)
    const reservationForm = document.querySelector('.reservation__form');
    const contactForm = document.querySelector('.contact__form');
  
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your reservation request. We will contact you shortly to confirm.');
      reservationForm.reset();
    });
  
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message. We will get back to you as soon as possible.');
      contactForm.reset();
    });
  });