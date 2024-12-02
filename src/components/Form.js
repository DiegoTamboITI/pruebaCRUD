import React, { useState, useEffect } from 'react';

const Form = ({ onSubmit, currentData }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (currentData) {
      setTitle(currentData.title);
      setBody(currentData.body);
    }
  }, [currentData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Descripción"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      ></textarea>
      <button type="submit">{currentData ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
};

export default Form;
