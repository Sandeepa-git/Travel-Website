# Wanderlust — Premium Travel & Tour Agency

Wanderlust is a high-end, responsive travel website built with modern technologies. It features a stunning design, smooth animations, and a focus on luxurious travel experiences.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Dark Mode**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## ✨ Key Features

- **Responsive Design**: Fully optimized for Mobile, Tablet, and Desktop.
- **Dynamic Hero Section**: High-impact visuals with refined typography and smooth entry animations.
- **Interactive Navigation**: Sticky header with adaptive light/dark mode states and a custom mobile drawer.
- **Dark Mode Support**: Seamless transition between light and dark themes with global persistence.
- **SEO Optimized**: Pre-configured metadata, semantic HTML, and JSON-LD schema for better search rankings.
- **Premium Aesthetics**: Glassmorphism effects, high-fidelity image handling, and smooth scroll behaviors.

---

## 📁 Project Structure

```text
play-nextjs/
├── src/
│   ├── app/              # Next.js App Router (Pages & Layouts)
│   │   ├── contact/      # Contact page logic
│   │   ├── destinations/ # Explore worldwide destinations
│   │   └── tour-packages/# Curated travel bundles
│   ├── components/       # Reusable UI components
│   │   ├── Hero/         # Main landing hero section
│   │   ├── layout/       # Header, Footer, and Global wrappers
│   │   └── ui/           # Buttons, badges, and micro-components
│   ├── styles/           # Global CSS & Tailwind configuration
│   └── lib/              # Utility functions and shared helpers
├── public/               # Static assets (Images, SVGs, Favicons)
└── prisma/               # Database schema (if applicable)
```

---

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the root directory and add your configurations (refer to `.env.example`).

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

5. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🎨 Design Philosophy

Wanderlust follows a **Premium Modern** design language:
- **Typography**: Utilizing `Playfair Display` for high-end headers and `DM Sans` for clean, professional body text.
- **Color Palette**: 
  - `Primary`: Deep Blue (#0B1F3A)
  - `Accent`: Gold (#C9A84C)
  - `Surface`: Warm Off-white (#F8F5F0)
- **Interactions**: Subtle hover lifts, smooth scale-in transitions, and intentional whitespace to emphasize luxury and ease of use.
