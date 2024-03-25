/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "clr-dark": "#0C0E18",
        "clr-light": "#D2D8F9",
        "clr-menu": "#ffffff14",
      },
      backgroundImage: {
        "home-table": "url('./src/assets/Home/background-home-tablet.jpg')",
        "home-desktop": "url('./src/assets/Home/background-home-desktop.jpg')",
        "destination-table":
          "url('./src/assets/Destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('./src/assets/Destination/background-destination-desktop.jpg')",
        "crew-table": "url('./src/assets/Crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('./src/assets/Crew/background-crew-desktop.jpg')",
        "tech-table": "url('./src/assets/Technology/technology-tablet.jpg')",
        "tech-desktop": "url('./src/assets/Technology/technology-desktop.jpg')",
      },
      fontFamily: {
        bellefair: ["Bellefair"],
        Barlow: ["Barlow Condensed"],
      },
      fontSize: {
        "clamp-home": "clamp(5rem, 9vw, 9rem)",
        "clamp-destination": "clamp(4.0625rem, -0.5263rem + 10.1974vi, 6rem)",
        "clamp-header": "clamp(1.125rem, -0.6513rem + 3.9474vi, 1.875rem)",
        "clamp-text": "clamp(0.9375rem, 0.8523rem + 0.4261vi, 1.125rem)",
        "clamp-h2": "clamp(1.25rem, 0.3977rem + 4.2614vi, 3.125rem)",
      },
      screens: {
        desktop: "720px",
      },
    },
    plugins: [],
  },
};
