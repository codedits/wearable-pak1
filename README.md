# Wearable™ - Modern Fashion Brand Website

A sleek, modern, and responsive website for the Wearable™ fashion brand. Built with HTML5, CSS3, and vanilla JavaScript, featuring smooth animations, interactive elements, and a contemporary design.

## 🚀 Features

### Design & UX
- **Modern Minimalist Design**: Clean, sophisticated layout with premium aesthetics
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: CSS animations and JavaScript-powered interactions
- **Loading Screen**: Elegant loading animation with brand logo
- **Parallax Effects**: Subtle parallax scrolling for enhanced visual appeal

### Navigation & Interaction
- **Fixed Navigation**: Sticky navbar with scroll effects
- **Mobile Menu**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Seamless navigation between sections
- **Active Link Highlighting**: Visual feedback for current section
- **Interactive Cards**: Hover effects and click interactions

### Content Sections
- **Hero Section**: Full-screen hero with animated text and call-to-action buttons
- **Collections Gallery**: Interactive collection cards with hover effects
- **About Section**: Brand story with statistics and background imagery
- **Contact Form**: Functional contact form with floating labels
- **Footer**: Comprehensive footer with newsletter signup and social links

### Technical Features
- **CSS Variables**: Consistent theming and easy customization
- **Intersection Observer**: Performance-optimized scroll animations
- **Form Validation**: Client-side email validation
- **Notification System**: Toast notifications for user feedback
- **Modal System**: Dynamic modal creation for collection previews

## 🎨 Design System

### Color Palette
- **Primary**: #000000 (Black)
- **Secondary**: #ffffff (White)
- **Accent**: #ff6b35 (Orange)
- **Text Primary**: #ffffff (White)
- **Text Secondary**: #a0a0a0 (Light Gray)
- **Background Dark**: #0a0a0a (Dark Gray)

### Typography
- **Primary Font**: Inter (Sans-serif)
- **Display Font**: Playfair Display (Serif)
- **Font Weights**: 300, 400, 500, 600, 700, 800

### Spacing & Layout
- **Border Radius**: 12px
- **Container Max Width**: 1200px
- **Section Padding**: 8rem (top/bottom)
- **Grid Gap**: 2rem

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern HTML features
- **CSS3**: Flexbox, Grid, CSS Variables, Animations
- **Vanilla JavaScript**: ES6+ features, DOM manipulation
- **Font Awesome**: Icons
- **Google Fonts**: Inter and Playfair Display

## 📁 Project Structure

```
wearable/
├── index.html          # Main HTML file
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── Media/              # Image assets
    ├── Asset 1.svg     # Brand logo
    ├── gg.jpg          # Hero background
    ├── serious-young-man-standing-isolated-grey.webp
    ├── stretching.webp
    ├── high-angle-teen-holding-skateboard.webp
    ├── 1__IhenCq47-RX1cFqFaoa5g.webp
    ├── 2149633155.webp
    └── soccer-game-concept.webp
```

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open** `index.html` in a modern web browser
3. **Enjoy** the fully functional website!

### Local Development

For local development, you can use any local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🎯 Key Features Explained

### Loading Screen
- Animated logo with pulsing effect
- Progress bar animation
- Smooth fade-out transition

### Hero Section
- Full-screen background with zoom animation
- Staggered text animations
- Interactive call-to-action buttons
- Scroll indicator with bouncing animation

### Collections Grid
- CSS Grid layout with responsive columns
- Hover effects with image scaling
- Overlay information on hover
- Click interactions with modal popups

### Contact Form
- Floating label animations
- Real-time validation
- Success/error notifications
- Form reset functionality

### Navigation
- Backdrop blur effect
- Scroll-based styling changes
- Mobile hamburger menu
- Active section highlighting

## 🎨 Customization

### Changing Colors
Update the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #000000;
    --accent-color: #ff6b35;
    /* ... other variables */
}
```

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Add any JavaScript functionality in `script.js`

### Modifying Animations
- Animation durations are controlled by CSS variables
- Scroll animations use Intersection Observer API
- Hover effects are CSS-based for performance

## 📱 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

## 🔧 Performance Optimizations

- **CSS Variables**: For consistent theming
- **Intersection Observer**: For scroll animations
- **Debounced Scroll Events**: For smooth performance
- **Optimized Images**: WebP format where possible
- **Minimal JavaScript**: Vanilla JS for better performance

## 🎯 Future Enhancements

- [ ] Product catalog integration
- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Blog section
- [ ] Advanced filtering
- [ ] Dark/Light theme toggle
- [ ] PWA capabilities
- [ ] SEO optimization

## 📄 License

This project is created for educational and portfolio purposes. Feel free to use and modify as needed.

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve the project.

---

**Wearable™** - Essential. Effortless. Wearable. 