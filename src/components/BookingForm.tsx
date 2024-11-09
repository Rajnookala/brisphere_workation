import React, { useState } from 'react';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    rooms: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // This is where the Redux action or API call would be made.
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Check-In:
        <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
      </label>
      <label>
        Check-Out:
        <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
      </label>
      <label>
        Rooms:
        <input type="number" name="rooms" value={formData.rooms} onChange={handleChange} min="1" required />
      </label>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;


export {};
