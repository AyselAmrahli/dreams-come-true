import React, { FC } from 'react';
import RateButton from '../RateButton';

import './index.scss';

interface IProps {
  title: string;
  poster: string;
  rate?: string
}

const MovieItem:FC<IProps> = ({title, poster, rate}) => {

  return (
    <div className="app-movie__item">
      <img
        src={`http://image.tmdb.org/t/p/original/${poster}`}
        alt="movie app film thumbnail" 
        className="app-movie__item__thumb"
      />
      {rate && <RateButton {...{rate}} />}
      <div className="app-movie__item__title">
        {title}
      </div>
    </div>
  );
}

export default MovieItem;
