import React from 'react';
import { useCart } from '../components/CartContext';
import '../CardPizza.css';

const CardPizza = ({ pizza }) => {
  const { addToCart } = useCart();

  return (
    <div className="pizza-card">
      <img src={pizza.img} alt={pizza.name} className="pizza-img" />
      <h3 className="pizza-title">{pizza.name}</h3>
      <p className="pizza-price">Precio: ${pizza.price.toLocaleString()}</p>
      <p className="pizza-desc">{pizza.desc}</p>
      <ul className="pizza-ingredients">
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <button onClick={() => addToCart(pizza)} className="btn btn-primary">
        Agregar
      </button>
    </div>
  );
};

export default CardPizza;



