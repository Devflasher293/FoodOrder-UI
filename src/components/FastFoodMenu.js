import React from 'react';

const FastFoodMenu = ({ addItem }) => {
  const menuItems = [
    { id: 1, name: 'Burger', description: 'A delicious burger with all the fixings.', price: 79.99 },
    { id: 2, name: 'Pizza', description: 'Classic pizza with your favorite toppings.', price: 99.99 },
    { id: 3, name: 'Fries', description: 'Crispy golden fries served hot and fresh.', price: 59.99 }
  ];

  return (
    <div className="row">
      {menuItems.map(item => (
        <div key={item.id} className="col-md-4">
          <div className="card">
            <img src="food-placeholder.png" className="card-img-top" alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">SEK {item.price}</p>
              <button onClick={() => addItem(item)} className="btn btn-primary">Add to Order</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FastFoodMenu;
