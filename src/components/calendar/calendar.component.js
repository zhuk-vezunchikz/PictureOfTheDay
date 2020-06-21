import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Calendar } from 'react-calendar';
import { defaultDate, formatDate } from './action';
import { localStore } from './constants';

const ReactCalendar = (props) => {
  const [, setDate] = useState(new Date());

  const onChange = (date) => {
    const fDate = formatDate(date);
    setDate(date);
    if (!localStore) {
      localStorage.setItem('picture', { date: fDate });
    } else {
      localStore.date = fDate;
      localStorage.setItem('picture', JSON.stringify(localStore));
    }
    props.getPicture(fDate);
  };

  return (
    <div className="item">
      <Calendar onChange={onChange} value={defaultDate()} maxDate={new Date()} />
      <h1>Nasa Pictures of the Day</h1>
      <p>Меняйте дату на календаре, чтобы посмотреть фотографию дня</p>
    </div>
  );
};

export default ReactCalendar;
