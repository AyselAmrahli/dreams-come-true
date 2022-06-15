import React, { FC } from 'react';

import './index.scss';

interface IProps {
  src: string;
}

const MoviePoster:FC<IProps> = ({src}) => (
  <div className="app-movie__poster">
    <img
      src={`http://image.tmdb.org/t/p/original/${src}`}
      alt="movie app film thumbnail" 
    />
  </div>
  );

export default MoviePoster;
