import React, { useState, useEffect } from 'react';
import FastFoodMenu from './components/FastFoodMenu';
import OrderComponent from './components/OrderComponent';
import ThemeToggle from './components/ThemeToggle';

import './App.css';

function App() {
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);

  // Handle theme toggling using useEffect
  const toggleTheme = (isDarkMode) => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.className = savedTheme;
    }
  }, []);

  const addItem = (item) => {
    setOrder(prevOrder => {
      const itemExists = prevOrder.find(i => i.id === item.id);
      if (itemExists) {
        return prevOrder.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevOrder, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId, newQuantity) => {
    setOrder(prevOrder => 
      prevOrder.map(i => 
        i.id === itemId ? { ...i, quantity: Math.max(1, newQuantity) } : i
      )
    );
  };

  useEffect(() => {
    const newTotal = order.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [order]);

  return (
    <div className="container">
      <ThemeToggle toggleTheme={toggleTheme} />
      <h1>Fast Food Menu</h1>
      <FastFoodMenu addItem={addItem} />
      <OrderComponent orderItems={order} updateQuantity={updateQuantity} total={total} />
    </div>
  );
}

export default App;
