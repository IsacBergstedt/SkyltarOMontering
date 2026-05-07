# Skyltar & Montering Website

A modern, responsive website for a sign and installation business built with Next.js.

## Features

- 🎨 Modern design with original color scheme (deep teal + golden yellow)
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Smooth scroll animations and micro-interactions
- 🚀 Built with Next.js 14 and React 18
- 📊 Performance optimized
- 🌙 Dark mode support via CSS variables

## Quick Start

### 1. Install Node.js (if you don't have it)
Download from https://nodejs.org/ (LTS version recommended)

### 2. Create the project structure
Create a new folder and copy these files into it:
```
skyltar-website/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── next.config.js
├── .gitignore
└── tsconfig.json (create this next)
```

### 3. Create tsconfig.json
In the root folder, create a new file called `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "preserve",
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "allowJs": true,
    "strict": false,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "incremental": true,
    "isolatedModules": true,
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### 4. Install dependencies and run

Open terminal in your project folder:

```bash
# Install packages
npm install

# Start development server
npm run dev
```

Then open http://localhost:3000 in your browser!

## Project Structure

```
app/
  ├── layout.tsx       # Main layout with metadata and global styles
  └── page.tsx         # Home page with all components
public/               # Static files (images, etc)
package.json          # Dependencies
next.config.js        # Next.js configuration
```

## Customization

### Update contact information
In `app/page.tsx`, search for:
- `070-XXXXXXX` → Replace with real phone number
- `info@skyltar.se` → Replace with real email

### Add images
Replace the image placeholder by updating the div with the camera emoji (📸):
```jsx
<Image src="/path/to/image.jpg" alt="Project" width={400} height={500} />
```

### Change colors
In `app/page.tsx`, modify the `colors` object at the top of the component:
```javascript
const colors = {
  primary: '#0D5E6F',      // Deep teal
  accent: '#FFC107',        // Golden yellow
  secondary: '#1A8FA3',     // Lighter teal
  light: '#E8F5F7',         // Very light teal
  dark: '#092C38'           // Very dark teal
};
```

## Deployment

### Deploy to Vercel (Recommended - Free)

1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "New Project" and import your GitHub repo
4. Click "Deploy" - done!

### Alternative: Deploy to Netlify

1. Build the project: `npm run build`
2. Go to https://netlify.com
3. Drag and drop the `.next` folder

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com) (optional, for more styling)

## Support

For issues or questions, check:
- Next.js docs: https://nextjs.org/docs
- React docs: https://react.dev
- Next.js GitHub Issues: https://github.com/vercel/next.js/issues
