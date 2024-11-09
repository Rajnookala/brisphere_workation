import React from 'react';
import Header from './components/Header';
import BookingForm from './components/BookingForm';

const App: React.FC = () => (
  <div>
    <Header />
    <div style={{ padding: '20px' }}>
      <h1>Book Your Stay in Ladakh</h1>
      <BookingForm />
    </div>
  </div>
);

export default App;
