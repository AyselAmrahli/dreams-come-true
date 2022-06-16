import { getStorageValue } from "../hooks/useLocalStorage"

export const isInWatchList = (id: number) => {
  const list = getStorageValue("watchlist");
  return list?.includes(id);
}

export const isInFavList = (id: number) => {
  const list = getStorageValue("favouriteList");
  return list?.includes(id);
}

