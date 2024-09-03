import React from 'react';

const OrderComponent = ({ orderItems, updateQuantity, total }) => {
  return (
    <div>
      <h3>Your Order</h3>
      <ul className="list-group">
        {orderItems.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            {item.name} x{item.quantity}
            <div>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="btn btn-danger btn-sm">-</button>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="btn btn-success btn-sm ml-2">+</button>
            </div>
            <span>SEK {item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <h4>Total: SEK {total}</h4>
    </div>
  );
}

export default OrderComponent;
