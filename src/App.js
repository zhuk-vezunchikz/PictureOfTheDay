import React from 'react';
import './App.css';
import Picture from './components/picture/picture.container';
import ReactCalendar from './components/calendar/calendar.container';

function App() {
  return (
    <div className="content">
      <Picture />
      <ReactCalendar />
    </div>
  );
}

export default App;
