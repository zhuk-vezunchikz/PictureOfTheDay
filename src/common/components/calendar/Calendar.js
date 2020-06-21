import React from 'react';
import 'react-calendar/dist/Calendar.css';
import { Calendar as ReactCalendar } from 'react-calendar';

const Calendar = (props) => {
  const onChange = (date) => {
    props.dateChange(date);
  };

  return (
    <div className="item">
      <ReactCalendar onChange={onChange} value={new Date(props.date)} maxDate={new Date()} />
      <h1>Nasa Pictures of the Day</h1>
      <p>Меняйте дату на календаре, чтобы посмотреть фотографию дня</p>
    </div>
  );
};

export default Calendar;
