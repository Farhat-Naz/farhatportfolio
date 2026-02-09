# Professional Portfolio Website

A modern, creative portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Looks great on all devices
- **Creative Animations**: Eye-catching animations using Framer Motion
- **Modern UI**: Clean and professional design with gradient colors
- **Dark Mode Support**: Automatically adapts to user's system preferences
- **Smooth Scrolling**: Seamless navigation between sections
- **Type-Safe**: Built with TypeScript for better code quality

## Sections

1. **Hero Section**: Eye-catching introduction with animated background
2. **Experience**: Timeline of your work history with achievements
3. **Projects**: Showcase your best work with descriptions and links
4. **Skills**: Visual representation of your technical skills
5. **Contact**: Contact form and social media links

## Getting Started

### Run the Development Server

```bash
cd portfolio-website
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Your Information

Edit the file `data/portfolio.ts` to update your personal information:

- **Personal Info**: Name, title, email, phone, location, bio, and social links
- **Experience**: Add your work history, roles, and achievements
- **Projects**: Showcase your projects with descriptions and technologies
- **Skills**: Update your technical skills and proficiency levels
- **Education**: Add your educational background

### Color Scheme

The website uses a purple-pink gradient theme. To change colors, update the Tailwind classes throughout the components:
- `from-purple-600 to-pink-600` for gradient backgrounds
- Modify individual component files for specific customizations

### Adding Images

To add project images:
1. Place images in the `public/projects` folder
2. Update the `image` field in the projects array in `data/portfolio.ts`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 16**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library

## File Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── Experience.tsx   # Work experience
│   ├── Projects.tsx     # Projects showcase
│   ├── Skills.tsx       # Skills section
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
├── data/
│   └── portfolio.ts     # Your portfolio data
└── public/              # Static assets
```

## Tips

1. **Update Regularly**: Keep your projects and experience up to date
2. **Add Real Images**: Replace placeholder project images with actual screenshots
3. **SEO Optimization**: Update metadata in `app/layout.tsx`
4. **Analytics**: Consider adding Google Analytics or similar
5. **Contact Form**: Integrate with a service like FormSpree or EmailJS for functional contact form

## License

Feel free to use this template for your own portfolio!
