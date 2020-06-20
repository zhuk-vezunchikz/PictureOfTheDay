import axios from 'axios';

export const callAPI = (fullDate) => {
  let responsePromise;
  if (fullDate) {
    responsePromise = axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=EkIajoWgxrvgquEQkWLdsxtIbjtv44hizC2aKLme`,
      {
        params: { date: fullDate },
      },
    );
  } else {
    responsePromise = axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=EkIajoWgxrvgquEQkWLdsxtIbjtv44hizC2aKLme`,
    );
  }
  return responsePromise.then((res) => {
    localStorage.setItem('picture', JSON.stringify(res.data));
    return res.data;
  });
};
