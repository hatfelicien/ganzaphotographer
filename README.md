# 📸 Photographer Portfolio Website

A professional, modern photographer portfolio website built with React featuring a filterable gallery.

## ✨ Features

- **Responsive Design** - Works perfectly on all devices
- **Filterable Gallery** - Filter photos by category (All, Weddings, Graduations, Portraits, Events)
- **Smooth Animations** - Beautiful transitions and hover effects
- **Contact Form** - Easy booking and inquiry system
- **Services Section** - Showcase your photography packages
- **About Section** - Tell your story
- **Mobile Menu** - Hamburger menu for mobile devices

## 🎯 Gallery Filtering

The gallery includes a powerful filtering system where visitors can:
- View all photos
- Filter by **Weddings** only
- Filter by **Graduations** only
- Filter by **Portraits** only
- Filter by **Events** only

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Open terminal in the project folder
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and visit: `http://localhost:3000`

## 📁 Project Structure

```
photographer-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js          # Navigation bar
│   │   ├── Hero.js            # Hero section
│   │   ├── About.js           # About section
│   │   ├── Gallery.js         # Filterable gallery ⭐
│   │   ├── Services.js        # Services section
│   │   ├── Contact.js         # Contact form
│   │   └── Footer.js          # Footer
│   ├── App.js                 # Main app component
│   ├── App.css                # Global styles
│   └── index.js               # Entry point
└── package.json
```

## 🎨 Customization

### Adding Your Own Photos

Edit `src/components/Gallery.js` and update the `galleryItems` array:

```javascript
const galleryItems = [
  { 
    id: 1, 
    category: 'wedding', 
    image: 'YOUR_IMAGE_URL', 
    title: 'Your Title' 
  },
  // Add more items...
];
```

### Changing Colors

Edit the CSS files to change the color scheme. Main color is `#e74c3c` (red).

### Adding More Categories

1. Add category to `categories` array in `Gallery.js`
2. Add items with that category to `galleryItems`

## 📱 Sections

1. **Home** - Hero section with call-to-action
2. **About** - Photographer bio and statistics
3. **Gallery** - Filterable photo gallery ⭐
4. **Services** - Photography packages
5. **Contact** - Contact form and information
6. **Footer** - Links and contact info

## 🔧 Technologies Used

- React 18
- CSS3 (Grid & Flexbox)
- React Hooks (useState)
- Responsive Design
- Smooth Scrolling

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🌟 Key Features Explained

### Gallery Filtering System

The gallery uses React state management to filter photos:
- Click a category button
- State updates with selected category
- Gallery re-renders showing only matching photos
- Smooth animations on filter change

### Responsive Design

- Desktop: Multi-column grid layout
- Tablet: Adjusted columns
- Mobile: Single column with hamburger menu

## 💡 Tips

- Replace placeholder images with your actual photos
- Update contact information in Contact and Footer components
- Customize services and pricing
- Add your social media links
- Update the about section with your story

## 📞 Support

For issues or questions, check the code comments or React documentation.

## 🎉 Ready to Use!

Your photographer portfolio is ready! Just:
1. Install dependencies
2. Run `npm start`
3. Customize with your content
4. Deploy to your hosting

---

**Built with ❤️ for photographers**
