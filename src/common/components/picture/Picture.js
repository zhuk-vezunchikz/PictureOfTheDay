import React from 'react';
import './picture.css';
import Preloader from '../../preloader/preloader';

const Picture = (props) => {
  const { picture } = props;
  return (
    <div className="container">
      {picture ? (
        <div className="block">
          <img src={picture} alt="Изображение отсутствует" />
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
};

export default Picture;
