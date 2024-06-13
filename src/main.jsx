import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';

function ThemeButton() {
  const [theme, setTheme] = useState(localStorage.theme);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const savedTheme = localStorage.theme;
      if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
        document.documentElement.classList.add('dark');
        setTheme('dark');
      } else {
        document.documentElement.classList.remove('dark');
        setTheme('light');
      }
    }, []);

    const toggleTheme = () => {
      if (theme === 'light') {
        document.documentElement.classList.add('dark');
        setTheme('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        setTheme('light');
        localStorage.theme = 'light';
      }
    };

    return (
      <button id="themeToggle" onClick={toggleTheme}>Toggle Theme</button>
    );
  }

  ReactDOM.createRoot(document.getElementById('button')).render(<ThemeButton />);

// ReactDOM.createRoot(document.getElementById('button')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
