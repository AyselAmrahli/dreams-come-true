import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MovieItem from '../components/MovieItem';
import PageTitle from '../components/PageTitle';
import Grid from '../components/shared/Grid';
import SearchField from '../components/shared/SearchField';

import { getMovies } from '../redux/actions';
import Loading from '../components/Loading';

const Home:FC = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>('');
  let dispatch = useDispatch();
  const movies = useSelector((state: any) => state.MovieReducer.movies)

  useEffect(() => {
    dispatch(getMovies())
  }, [])

  useEffect(() => {
    const getData = setTimeout(() => {
      dispatch(getMovies(value))
    }, 2000)

    return () => clearTimeout(getData)
  }, [value])

  const movieItems = movies?.map((el: any) =>
    <div key={el.id} onClick={() => navigate(`/${el.id}`)}>
      <MovieItem
        title={el.title}
        poster={el.poster_path}
        rate={el.vote_average}
      />
    </div>
  )

  return (
    <section className="app-page__wrapper">
      <PageTitle content='Movies' />
      <SearchField
       onChange={(val: string) =>setValue(val)}
       defaultValue={value}
       placeholder="Search Movies"
       />

      <div style={{padding: '40px 0'}}>
        {movieItems ?
        <Grid>
          {movieItems}
        </Grid> : <Loading />}
      </div>
    </section>
  );
}

export default Home;
