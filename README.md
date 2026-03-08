# 🌍 Wanderlust - Premium Travel & Tour Agency

Wanderlust is a high-end, responsive travel platform built with **Next.js 14+** and **Tailwind CSS**. Designed for modern travel agencies, it offers a seamless blend of performance, aesthetics, and user experience to showcase luxurious worldwide destinations and curated tour packages.

---


## 🛠️ Technology Stack

| Category             | Technology                                                               |
| :------------------- | :----------------------------------------------------------------------- |
| **Framework**  | [Next.js 14+](https://nextjs.org/) (App Router)                             |
| **Language**   | [TypeScript](https://www.typescriptlang.org/)                               |
| **Styling**    | [Tailwind CSS](https://tailwindcss.com/)                                    |
| **Animations** | [Framer Motion](https://www.framer.com/motion/)                             |
| **Icons**      | [Lucide React](https://lucide.dev/)                                         |
| **Theming**    | [Next-Themes](https://github.com/pacocoursey/next-themes) (Dark/Light Mode) |
| **Fonts**      | [Google Fonts](https://fonts.google.com/) (Playfair Display & DM Sans)      |

---

## ✨ Key Features

### 💎 Premium UI/UX

- **Glassmorphism Design**: Modern, semi-transparent UI elements for a sleek, high-end feel.
- **Micro-Animations**: Subtle entry transitions and hover effects using Framer Motion.
- **Retina Ready**: Optimized for high-resolution displays with high-fidelity image handling.

### 🌓 Advanced Theming

- **Intelligent Dark Mode**: Seamlessly switch between themes with global state persistence.
- **Dynamic Header**: Sticky navigation that adapts its style based on scroll position and active theme.

### 📱 Fully Responsive

- **Mobile-First Approach**: Perfectly optimized for Mobile, Tablet, and Desktop.
- **Custom Drawer**: Elegant mobile navigation drawer for effortless browsing on small screens.

### 📈 Performance & SEO

- **Server-Side Rendering (SSR)**: Leveraging Next.js for lightning-fast initial page loads.
- **SEO Optimized**: Pre-configured metadata, semantic HTML5, and JSON-LD schema support.
- **Image Optimization**: Utilizing `next/image` for automatic resizing and lazy loading.

---

## 📁 Project Structure

```text
play-nextjs/
├── public/               # Static assets (Hero images, SVGs, Favicon)
├── src/
│   ├── app/              # Next.js App Router (Pages & Layouts)
│   │   ├── contact/      # Contact & Inquiry page
│   │   ├── destinations/ # Dynamic destination listings and details
│   │   ├── tour-packages/# Curated travel bundles and booking logic
│   │   ├── layout.tsx    # Root layout with providers (Theme, Auth)
│   │   └── page.tsx      # Main Landing Page
│   ├── components/       # Component-driven architecture
│   │   ├── Hero/         # Impactful landing section with dynamic text
│   │   ├── layout/       # Global Header, Footer, and Navbar
│   │   ├── ScrollToTop/  # Smooth scroll utility component
│   │   └── ui/           # Atomic components (Buttons, Cards, Modals)
│   ├── data/             # Mock data for packages and destinations
│   ├── styles/           # Global CSS and Tailwind configuration
│   ├── hooks/            # Custom React hooks for business logic
│   └── lib/              # Shared utility functions and formatting
├── .env.example          # Template for environment variables
├── tailwind.config.ts    # Custom design tokens and theme extensions
└── tsconfig.json         # TypeScript configuration
```

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/your-username/wanderlust.git
cd wanderlust
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create a `.env.local` file in the root:

```bash
NEXT_PUBLIC_API_URL=your_api_url
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the result.

---

## 🎨 Design Philosophy

Wanderlust follows a **High-Contrast Luxury** design language:

- **Typography**: `Playfair Display` for elegant, serif headings; `DM Sans` for readable, sans-serif body copy.
- **Visuals**: Large, immersive imagery paired with intentional whitespace to guide the user's attention.
- **Interactions**: Smooth `0.3s` transitions on hover to provide tactile feedback without being intrusive.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ by Sandeepa Wimalsiri
