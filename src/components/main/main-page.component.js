import React, { useEffect } from 'react';
import Picture from '../../common/components/picture/Picture';
import Calendar from '../../common/components/calendar/Calendar';
import './main-page.css';

const MainPage = (props) => {
  useEffect(() => {
    props.getPicture(props.date);
  }, [props.date, props.getPicture]);

  return (
    <div className="content">
      <Picture picture={props.picture} />
      <Calendar dateChange={props.dateChange} date={props.date} />
    </div>
  );
};

export default MainPage;
