import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const addFavorite = (item) => setFavorites((prev) => [...prev, item]);
  const removeFavorite = (itemId) => setFavorites((prev) => prev.filter((item) => item.id !== itemId));
  const isFavorite = (itemId) => favorites.some((item) => item.id === itemId);

  const value = { favorites, addFavorite, removeFavorite, isFavorite };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export const useFavorites = () => useContext(FavoritesContext);
