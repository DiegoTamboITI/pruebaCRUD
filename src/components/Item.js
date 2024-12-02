import React from 'react';

const Item = ({ item, onEdit, onDelete }) => {
  return (
    <div className="item">
      <h3>{item.title}</h3>
      <p>{item.body}</p>
      <button onClick={() => onEdit(item)}>Editar</button>
      <button onClick={() => onDelete(item.id)}>Eliminar</button>
    </div>
  );
};

export default Item;
