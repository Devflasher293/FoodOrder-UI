import React, { useState, useEffect } from 'react';

const ThemeToggle = ({ toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme(!isDarkMode);
  };

  return (
    <div>
      <button onClick={handleToggle} className="btn btn-secondary">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeToggle;
