import React from 'react';
import Item from './Item';

const List = ({ data, onEdit, onDelete }) => {
  return (
    <div className="list">
      {data.map((item) => (
        <Item key={item.id} item={item} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default List;
