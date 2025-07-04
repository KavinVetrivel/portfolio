# Kavin Vetrivel - Personal Portfolio

A modern, responsive personal portfolio website showcasing my skills, projects, and experience as an aspiring software developer and AIML student.

## 🚀 Features

### Design & User Experience
- **Modern & Clean Design**: Minimalist design with vibrant colors and smooth animations
- **Dark/Light Mode Toggle**: Switch between themes with a beautiful transition
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: CSS animations and scroll-triggered effects
- **Custom Cursor**: Interactive cursor effects for enhanced user experience

### Sections
1. **Home/Introduction**: Personal introduction with animated typing effect
2. **About Me**: Background information and education details
3. **Skills**: Interactive skill cards with hover effects
4. **Projects**: Project showcase with GitHub links
5. **Resume**: Downloadable resume section
6. **Contact**: Contact form and social media links

### Technical Features
- **Pure HTML/CSS/JavaScript**: No framework dependencies
- **Modern CSS**: CSS Grid, Flexbox, and custom properties
- **Interactive Elements**: Hover effects, form validation, and smooth scrolling
- **Performance Optimized**: Lightweight and fast loading
- **SEO Friendly**: Semantic HTML structure

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter font family)

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── assets/             # Images and other assets (if any)
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required!

### Installation & Running

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **That's it!** The portfolio is ready to use

### Alternative: Using a Local Server

For the best experience, you can run it on a local server:

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx serve .

# Using PHP (if installed)
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🎨 Customization

### Personal Information
Update the following in `index.html`:
- Name and tagline in the hero section
- About me content
- Skills and technologies
- Project details
- Contact information

### Colors & Theme
Modify the CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #06b6d4;
    /* ... other colors */
}
```

### Adding Projects
Add new project cards in the projects section:
```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-project-icon"></i>
    </div>
    <div class="project-content">
        <h3>Project Title</h3>
        <p>Project description...</p>
        <div class="project-tags">
            <span class="tag">Technology</span>
        </div>
        <div class="project-links">
            <a href="#" class="btn btn-small">View Live</a>
            <a href="#" class="btn btn-small btn-outline">GitHub</a>
        </div>
    </div>
</div>
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted grid layouts)
- **Mobile**: < 768px (stacked layout, mobile menu)

## 🌟 Key Features Explained

### Dark Mode Toggle
- Persists user preference in localStorage
- Smooth transition between themes
- Updates all color schemes automatically

### Smooth Scrolling
- Navigation links smoothly scroll to sections
- Active section highlighting in navigation
- Mobile-friendly navigation menu

### Interactive Elements
- Skill cards with hover animations
- Project cards with scale effects
- Contact form with validation
- Custom cursor effects

### Animations
- Fade-in animations on scroll
- Typing effect for hero title
- Floating animation for profile image
- Particle effects in hero section

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ Internet Explorer (not supported)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

- **Name**: Kavin Vetrivel
- **Email**: vetrivelkavin5@gmail.com
- **LinkedIn**: linkedin.com/in/kavin-vetrivel
- **GitHub**: github.com/kavin-vetrivel

---

**Built with ❤️ by Kavin Vetrivel** 
