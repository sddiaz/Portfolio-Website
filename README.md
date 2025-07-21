# 🌐 Personal Portfolio Website

Welcome to my personal portfolio website! This project is a showcase of my technical expertise, design sensibilities, and ability to build scalable, performant, and visually appealing web applications. Below, you'll find an overview of the architecture, technologies, and features that make this project stand out.

---

## 🚀 Features

- **Interactive 3D Visuals**: Leveraging `react-three-fiber` and `@react-three/drei` to create immersive 3D scenes, including Earth, Satellite, and UFO models.
- **Dynamic Experience Section**: A visually engaging timeline of professional experience, featuring tools, locations, and accomplishments with custom icons and animations.
- **Responsive Design**: Fully responsive layout optimized for all screen sizes, from desktops to mobile devices.
- **Custom Animations**: Smooth transitions, hover effects, and particle animations using CSS keyframes and cubic-bezier easing.
- **Thematic Consistency**: A modern, dark-themed UI with custom CSS variables for colors, typography, and reusable design tokens.
- **Performance Optimizations**: Lazy loading of assets, efficient animations, and optimized rendering for 3D models.
- **Progressive Web App (PWA)**: Includes a `manifest.json` and service worker for offline capabilities and mobile installation.

---

## 🏗️ Architecture

This project follows a **component-based architecture** using React. The structure is modular and scalable, ensuring maintainability and reusability of components.


---

## 🛠️ Technologies & Libraries

### Frontend
- **React**: Component-based UI library for building dynamic and interactive user interfaces.
- **TypeScript**: Strongly typed JavaScript for improved developer productivity and code quality.
- **react-three-fiber**: React renderer for Three.js, enabling 3D graphics and animations.
- **@react-three/drei**: Helper library for common 3D tasks like loading models and creating controls.
- **Three.js**: 3D library for rendering and animating 3D models.
- **CSS Modules**: Scoped and reusable CSS for styling components.
- **Devicons-react**: Icon library for displaying technology logos dynamically.

### Performance & Optimization
- **Lazy Loading**: Dynamically load assets and components to improve initial load time.
- **Responsive Design**: CSS media queries and `clamp()` for adaptive layouts.
- **Custom Hooks**: Encapsulated logic for viewport detection and container height calculations.

### Build Tools
- **Create React App**: Boilerplate for React projects with Webpack, Babel, and ESLint pre-configured.
- **Service Worker**: PWA support for offline capabilities.

---

## 📂 Key Components

### 3D Models
- **Earth**: [Earth.tsx]([src/Components/Earth.tsx](https://github.com/sddiaz/Personal-Website/blob/main/personal-website/src/Components/Earth.tsx)) - Interactive 3D Earth model rendered using `react-three-fiber`.
- **Satellite**: [Satellite.tsx](src/Components/Satellite.tsx) - Satellite model with animations.
- **UFO**: [Ufo.tsx](src/Components/Ufo.tsx) - UFO model with dynamic lighting and effects.

### Experience Section
- **Dynamic Cards**: [Experience.tsx](src/Pages/Experience/Experience.tsx) - Displays professional experience with tools, locations, and accomplishments.
- **Custom Icons**: Dynamically rendered icons using `devicons-react`.

---

## 📈 Scalability & Best Practices

- **Reusable Components**: Modular design ensures components can be reused across the application.
- **Thematic Consistency**: CSS variables and design tokens for consistent styling.
- **Accessibility**: Semantic HTML and ARIA attributes for improved accessibility.
- **Performance**: Optimized rendering of 3D models and animations for smooth user experience.

---

## 🏆 Why This Project Stands Out

This portfolio demonstrates my ability to:
1. Implement **interactive 3D graphics** to create engaging user experiences.
2. Follow **best practices** in software engineering, including modular architecture, responsive design, and accessibility.
3. Optimize for **real-world performance** with lazy loading, efficient animations, and responsive layouts.

---

## 📜 License

This project is licensed under an unknown license. For more details, refer to the original repository: [GitHub Repository](https://github.com/stefanpython/personal-website/tree/5c846c620a21b7b2443c65f719b7b066793abdc8/README.md).
