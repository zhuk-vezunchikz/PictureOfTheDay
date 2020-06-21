import React from 'react';
import './picture.css';

const Picture = (props) => {
  return (
    <div className="block">
      <img src={props.picture} alt="Изображение отсутствует" />
    </div>
  );
};

export default Picture;
