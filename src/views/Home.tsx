import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Plus from '../assets/images/add.svg';
import Like from '../assets/images/like.svg';

import MovieItem from '../components/MovieItem';
import PageTitle from '../components/PageTitle';
import Grid from '../components/shared/Grid';
import SearchField from '../components/shared/SearchField';
import Loading from '../components/Loading';

import { getMovies } from '../redux/actions';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { EList } from '../const/enum';
import { isInFavList, isInWatchList } from '../utils';

const Home:FC = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>('');
  let dispatch = useDispatch();
  const movies = useSelector((state: any) => state.MovieReducer.movies)
  const [watchlist, setWatchlist] = useLocalStorage("watchlist", "");
  const [favouriteList, setFavouriteList] = useLocalStorage("favouriteList", "");

  useEffect(() => {
    dispatch(getMovies())
  }, [])

  useEffect(() => {
    const getData = setTimeout(() => {
      dispatch(getMovies(value))
    }, 2000)

    return () => clearTimeout(getData)
  }, [value])

  const addToMyList = (item: number, type: EList) => {
    switch (type) {
      case EList.WATCH:
        const watch =[...watchlist];
        if (!watch.includes(item)) {
          watch.push(item)
          setWatchlist(watch)
          
        }
        break;

      case EList.FAVOURITE:
        const fav = [...favouriteList];
        if(!fav.includes(item)) {
          fav.push(item)
          setFavouriteList(fav)
        }
        break;
    
      default:
        break;
    }
  }

  const movieItems = movies?.map((el: any) =>
    <MovieItem
      key={el.id}
      title={el.title}
      poster={el.poster_path}
      rate={el.vote_average}
      navigate={() => navigate(`/${el.id}`)}
    >
      <button
        className="app-movie__btn--add"
        onClick={() => addToMyList(el.id, EList.WATCH)}
      >
        <img src={Plus} className="icon" alt="icon" /> {!isInWatchList(el.id) ? 'Add to watch later' : 'Added to watch later'}
      </button>
      <button
        className="app-movie__btn--add"
        onClick={() => addToMyList(el.id, EList.FAVOURITE)}
      >
        <img src={Like} className="icon" alt="icon" /> {!isInFavList(el.id) ? 'Add to my favourites' : 'Added to favourites'}
      </button>
    </MovieItem>
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
