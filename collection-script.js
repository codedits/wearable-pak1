// Collection Page JavaScript

// Product data for each collection
const collectionData = {
    classics: [
        {
            id: 1,
            name: "Classic White Tee",
            price: "$29.99",
            description: "Timeless white t-shirt with premium cotton blend. Perfect for everyday wear with a comfortable fit and breathable fabric.",
            image: "Media/serious-young-man-standing-isolated-grey.webp",
            category: "T-Shirts"
        },
        {
            id: 2,
            name: "Essential Denim Jacket",
            price: "$89.99",
            description: "Classic denim jacket with modern fit. Versatile piece that pairs perfectly with any outfit for a timeless look.",
            image: "Media/gg.webp",
            category: "Outerwear"
        },
        {
            id: 3,
            name: "Premium Chino Pants",
            price: "$59.99",
            description: "Comfortable chino pants for everyday wear. Smart casual design with stretch fabric for maximum comfort.",
            image: "Media/a-photograph-depicting-a-single-folded-b_gZ57jXpBTsqlkTh1y5ky0g_JgpwLnepT2CSdMVGX2zXOg.jpeg",
            category: "Pants"
        },
        {
            id: 4,
            name: "Minimalist Hoodie",
            price: "$49.99",
            description: "Clean design hoodie with soft fabric. Perfect for layering or wearing alone with a minimalist aesthetic.",
            image: "Media/back.jpg",
            category: "Hoodies"
        }
    ],
    sports: [
        {
            id: 5,
            name: "Performance Shorts",
            price: "$34.99",
            description: "Lightweight athletic shorts for maximum mobility. Designed for high-performance activities with moisture-wicking technology.",
            image: "Media/stretching.webp",
            category: "Athletic Wear"
        },
        {
            id: 6,
            name: "Training Tank Top",
            price: "$24.99",
            description: "Moisture-wicking tank for intense workouts. Breathable fabric keeps you cool during high-intensity training sessions.",
            image: "Media/soccer-game-concept.webp",
            category: "Athletic Wear"
        },
        {
            id: 7,
            name: "Compression Leggings",
            price: "$44.99",
            description: "High-performance compression leggings. Provides support and flexibility for all types of athletic activities.",
            image: "Media/stretching.webp",
            category: "Athletic Wear"
        },
        {
            id: 8,
            name: "Sports Jacket",
            price: "$69.99",
            description: "Lightweight sports jacket for outdoor activities. Weather-resistant design perfect for running, cycling, or outdoor sports.",
            image: "Media/soccer-game-concept.webp",
            category: "Outerwear"
        }
    ],
    streetwear: [
        {
            id: 9,
            name: "Urban Oversized Tee",
            price: "$39.99",
            description: "Street-style oversized t-shirt with bold graphics. Urban aesthetic with comfortable oversized fit for street fashion.",
            image: "Media/high-angle-teen-holding-skateboard.webp",
            category: "T-Shirts"
        },
        {
            id: 10,
            name: "Cargo Street Pants",
            price: "$54.99",
            description: "Functional cargo pants with street aesthetic. Multiple pockets and urban design perfect for streetwear enthusiasts.",
            image: "Media/high-angle-teen-holding-skateboard.webp",
            category: "Pants"
        },
        {
            id: 11,
            name: "Street Bomber Jacket",
            price: "$79.99",
            description: "Edgy bomber jacket for urban style. Classic bomber design with modern streetwear elements and comfortable fit.",
            image: "Media/gg.webp",
            category: "Outerwear"
        },
        {
            id: 12,
            name: "Graphic Hoodie",
            price: "$49.99",
            description: "Street-inspired hoodie with unique graphics. Bold designs with comfortable fit for everyday street style.",
            image: "Media/back.jpg",
            category: "Hoodies"
        }
    ],
    artistic: [
        {
            id: 13,
            name: "Abstract Print Shirt",
            price: "$44.99",
            description: "Artistic design shirt with unique patterns. Hand-painted designs that make each piece a work of wearable art.",
            image: "Media/1__IhenCq47-RX1cFqFaoa5g.webp",
            category: "T-Shirts"
        },
        {
            id: 14,
            name: "Creative Denim",
            price: "$94.99",
            description: "Hand-painted denim with artistic elements. Each piece is uniquely designed with artistic flair and premium denim quality.",
            image: "Media/a-photograph-depicting-a-single-folded-b_gZ57jXpBTsqlkTh1y5ky0g_JgpwLnepT2CSdMVGX2zXOg.jpeg",
            category: "Denim"
        },
        {
            id: 15,
            name: "Artistic Sweater",
            price: "$64.99",
            description: "Knit sweater with artistic color blocking. Unique color combinations and artistic design elements for creative expression.",
            image: "Media/1__IhenCq47-RX1cFqFaoa5g.webp",
            category: "Sweaters"
        },
        {
            id: 16,
            name: "Designer Tote Bag",
            price: "$29.99",
            description: "Canvas tote with artistic embroidery. Hand-embroidered designs on durable canvas for a unique artistic accessory.",
            image: "Media/Asset 1.svg",
            category: "Accessories"
        }
    ],
    drops: [
        {
            id: 17,
            name: "Limited Edition Tee",
            price: "$89.99",
            description: "Exclusive limited edition t-shirt. Only 100 pieces available worldwide with unique design and premium materials.",
            image: "Media/2149633155.webp",
            category: "Limited Edition"
        },
        {
            id: 18,
            name: "Collaboration Hoodie",
            price: "$129.99",
            description: "Special collaboration hoodie with unique design. Limited collaboration piece with exclusive artwork and premium construction.",
            image: "Media/2149633155.webp",
            category: "Collaboration"
        },
        {
            id: 19,
            name: "Seasonal Collection Jacket",
            price: "$199.99",
            description: "Premium seasonal jacket with exclusive materials. Limited seasonal release with premium materials and unique design.",
            image: "Media/gg.webp",
            category: "Seasonal"
        },
        {
            id: 20,
            name: "Artist Series Pants",
            price: "$149.99",
            description: "Limited artist series pants with custom artwork. Exclusive collaboration with renowned artists featuring unique designs.",
            image: "Media/a-photograph-depicting-a-single-folded-b_gZ57jXpBTsqlkTh1y5ky0g_JgpwLnepT2CSdMVGX2zXOg.jpeg",
            category: "Artist Series"
        }
    ]
};

// Get current collection from URL or page title
function getCurrentCollection() {
    const path = window.location.pathname;
    if (path.includes('classics')) return 'classics';
    if (path.includes('sports')) return 'sports';
    if (path.includes('streetwear')) return 'streetwear';
    if (path.includes('artistic')) return 'artistic';
    if (path.includes('drops')) return 'drops';
    return 'classics'; // default
}

// Load products for current collection
function loadProducts() {
    const collection = getCurrentCollection();
    const products = collectionData[collection] || [];
    const productsGrid = document.getElementById('productsGrid');
    
    if (!productsGrid) return;
    
    // Show loading state
    productsGrid.classList.add('loading');
    
    // Clear existing products
    productsGrid.innerHTML = '';
    
    // Add products to grid
    products.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        productsGrid.appendChild(productCard);
    });
    
    // Remove loading state
    setTimeout(() => {
        productsGrid.classList.remove('loading');
    }, 500);
}

// Create product card element
function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-overlay">
                <button class="view-details-btn" data-product-id="${product.id}">View Details</button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-category">${product.category}</p>
            <p class="product-description">${product.description}</p>
            <div class="product-price">${product.price}</div>
            <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
        </div>
    `;
    
    // Add event listeners
    const viewDetailsBtn = card.querySelector('.view-details-btn');
    const addToCartBtn = card.querySelector('.add-to-cart-btn');
    
    viewDetailsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showProductModal(product);
    });
    
    addToCartBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(product);
    });
    
    // Click on card to view details
    card.addEventListener('click', () => {
        showProductModal(product);
    });
    
    return card;
}

// Show product modal
function showProductModal(product) {
    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');
    
    // Set modal content
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalTitle.textContent = product.name;
    modalCategory.textContent = product.category;
    modalDescription.textContent = product.description;
    modalPrice.textContent = product.price;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add event listeners for modal actions
    const addToCartBtn = modal.querySelector('.add-to-cart-btn');
    addToCartBtn.onclick = () => {
        addToCart(product);
        closeProductModal();
    };
}

// Close product modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Add to cart functionality
function addToCart(product) {
    // Create notification
    showNotification(`${product.name} added to cart!`, 'success');
    
    // Here you would typically add the product to a cart state
    // For now, we'll just show a notification
    console.log('Added to cart:', product);
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        z-index: 10001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Load products
    loadProducts();
    
    // Modal close functionality
    const modalClose = document.getElementById('modalClose');
    const modal = document.getElementById('productModal');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeProductModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeProductModal();
            }
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProductModal();
        }
    });
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            if (isValidEmail(email)) {
                showNotification('Successfully subscribed to newsletter!', 'success');
                newsletterForm.reset();
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });
    }
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Close mobile menu when clicking on links
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
}); 