# Build to Wear

A minimal, editorial-style website that introduces the Build to Wear concept and facilitates the Founders Drop (10 free custom hoodies for creators at printing cost only).

## 🎨 Design Philosophy

Build to Wear is not just a website — it's a soft, minimalist, emotional container for a creative movement. The design combines subtle visual storytelling with functional clarity, where every pixel and animation feels considered, intentional, and calm. It's premium without being loud, poetic without being confusing, and simple without being boring.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/wear-my-work.git
cd wear-my-work
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Build for production:
```bash
npm run build
# or
yarn build
```

## 🛠️ Tech Stack

- Vite for build tooling
- SCSS for styling
- GSAP for animations
- Locomotive Scroll for smooth scrolling
- Google Fonts for typography

## 📁 Project Structure

```
wear-my-work/
├── src/
│   ├── js/
│   │   └── main.js
│   └── styles/
│       └── main.scss
├── index.html
├── founders.html
├── package.json
└── README.md
```

## 🎯 Features

- Responsive design
- Smooth scrolling
- Subtle animations
- Email subscription form
- Tally.so form integration
- Mobile-first approach

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_TALLY_FORM_ID=your_tally_form_id
VITE_BUTTONDOWN_API_KEY=your_buttondown_api_key
```

## 📝 Content Management

### Gallery Updates

The gallery section can be updated by modifying the `src/js/main.js` file. Add new items to the `teaserItems` array:

```javascript
const teaserItems = [
  {
    title: "Creator Name",
    description: "Project description",
    image: "/path/to/image.jpg",
    link: "https://creator-website.com"
  },
  // Add more items here
];
```

## 🚀 Deployment

The site can be deployed to any static hosting service. Recommended options:

- Vercel
- Netlify
- GitHub Pages

### GitHub Pages Deployment

1. Create a new repository on GitHub named `build-to-wear`

2. Push your code to the repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/build-to-wear.git
git push -u origin main
```

3. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

4. Deploy to GitHub Pages:
```bash
npm run deploy
```

5. Configure GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "gh-pages" branch
   - Click "Save"

6. Your site will be available at: `https://yourusername.github.io/build-to-wear/`

### Custom Domain Setup

If you want to use a custom domain (e.g., buildtowear.com):

1. Create a CNAME file in your project root:
```bash
echo "www.buildtowear.com" > CNAME
```

2. Deploy again:
```bash
npm run deploy
```

3. Configure your domain's DNS settings:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Add A records pointing to GitHub Pages IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

4. Wait for DNS propagation (can take up to 24 hours)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details. 