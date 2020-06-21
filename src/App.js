import React from 'react';
import './App.css';
import PictureHOC from './components/picture/picture.container';
import ReactCalendar from './components/calendar/calendar.container';

function App() {
  return (
    <div className="content">
      <PictureHOC />
      <ReactCalendar />
    </div>
  );
}

export default App;
