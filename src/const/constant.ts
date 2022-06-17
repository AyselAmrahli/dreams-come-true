import Auth from "../views/Auth";
import Detail from "../views/Detail";
import Favourites from "../views/Favourites";
import Home from "../views/Home";
import WatchLater from "../views/WatchLater";
import { IAppMenuList, IAppRoute } from "./model";

export const getApiKey = () => '56b4e93d2204bee0e2d35d74719395af';

const BASE_URL = 'https://api.themoviedb.org/3'

export const getApiUrl = (url: string, query?: string) => {
  if(query) return `${BASE_URL}/search/movie?api_key=${getApiKey()}&query=${query}`;
  return `${BASE_URL}/${url}?api_key=${getApiKey()}`;
}

export const appMenuList:Array<IAppMenuList> = [
  {
    text: 'Home',
    route: '/',
  },
  {
    text: 'Watch Later',
    route: '/watch-later',
  },
  {
    text: 'Favourites',
    route: '/favorites',
  }
]

export const routes:Array<IAppRoute> = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/watch-later',
    Component: WatchLater,
  },
  {
    path: '/favorites',
    Component: Favourites,
  },
  {
    path: '/:id',
    Component: Detail,
  }
]