import React, { FC } from 'react';
import NoPoster from '../../assets/images/no-poster.jpeg';
import ArrowRight from '../../assets/images/arrow-right.svg';

import RateButton from '../RateButton';
import './index.scss';

interface IProps {
  title: string;
  poster: string;
  rate?: number;
  navigate?: any;
  children?: any;
}

const MovieItem:FC<IProps> = ({title, poster, rate, navigate, children}) => (
  <div className="app-movie__item" data-testid={`app-movie-item-${title}`}>
    <img
      data-testid={`app-movie-img-${title}`}
      src={poster ? `http://image.tmdb.org/t/p/original/${poster}` : NoPoster}
      alt="movie app film thumbnail" 
      className="app-movie__item__thumb"
    />
    <RateButton {...{rate}} />
    <div
      data-testid={`app-movie-body-${title}`}
      className="app-movie__item__title"
      onClick={navigate}
    >
      {title} <img src={ArrowRight} alt="icon" />
    </div>
    {children}
  </div>
);

export default MovieItem;
