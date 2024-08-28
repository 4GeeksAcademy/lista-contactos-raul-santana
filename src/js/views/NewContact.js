import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewContact = () => {
  const [contact, setContact] = useState({
    Nombre: '',
    Número: '',
    Correo: '',
    Dirección: ''
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://playground.4geeks.com/contact/agendas/RaulSantana/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
      });

      if (response.ok) {
        setMessage('Contact created successfully!');
        setContact({
          Nombre: '',
          Número: '',
          Correo: '',
          Dirección: ''
        });
        navigate('/');
      } else {
        setMessage('Failed to create contact. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Añadir nuevo contacto</h1>
      {message && <div className="alert alert-info text-center">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre y Apellidos</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Nombre y Apellidos"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Número</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Ingrese un número"
            value={contact.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Ingrese un correo"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Dirección</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Ingrese una dirección"
            value={contact.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Crear nuevo contacto
        </button>
      </form>
      <div className="text-center mt-3">
        <Link to="/">Volver a contactos</Link>
      </div>
    </div>
  );
};

export default NewContact;
