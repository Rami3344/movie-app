import './App.css';
import { useState } from 'react';
import MovieList from './components/MovieList';
import { moviesData } from './Data';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState(moviesData)
  const [search, setSearch] = useState('')
  const [searchRating, setsearchRating] = useState("")
  const handleAdd = (newMovie) => setMovies([...movies,newMovie])
  const handleSearch = (e) => setSearch (e.target.value)
  const handleRating = (rating) => setsearchRating (rating)
  return (
    <div className="App">
      <Filter search={search} handleSearch={handleSearch} searchRating={searchRating} handleRating={handleRating} />
      <MovieList films={movies.filter((el) => el.name.toLowerCase().includes(search.toLowerCase())&& el.rating >= searchRating)} />
    <AddMovie handleAdd={handleAdd} />
    </div>
  );
}

export default App;
