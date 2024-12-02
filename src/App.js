import React, { useState, useEffect } from 'react';
import { fetchData, createData, updateData, deleteData } from './api';
import Form from './components/Form';
import List from './components/List';
import './styles.css';

const App = () => {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetchData();
      setData(response.data);
    };
    loadData();
  }, []);

  const handleCreate = async (newData) => {
    const response = await createData(newData);
    setData([...data, response.data]);
  };

  const handleUpdate = async (updatedData) => {
    const response = await updateData(currentData.id, updatedData);
    setData(data.map((item) => (item.id === currentData.id ? response.data : item)));
    setCurrentData(null);
  };

  const handleDelete = async (id) => {
    await deleteData(id);
    setData(data.filter((item) => item.id !== id));
  };

  const handleSubmit = (formData) => {
    if (currentData) {
      handleUpdate(formData);
    } else {
      handleCreate(formData);
    }
  };

  return (
    <div className="app">
      <h1>CRUD App</h1>
      <Form onSubmit={handleSubmit} currentData={currentData} />
      <List data={data} onEdit={setCurrentData} onDelete={handleDelete} />
    </div>
  );
};

export default App;
