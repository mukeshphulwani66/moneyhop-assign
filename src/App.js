import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import Search from './components/Search';
import GifResults from './components/GifResults';

const API_KEY = "ZELWfybDrO73wDnOiw0e5WqfqtjpiioD"
const ITEMS_PER_PAGE = 12
const fetchGifs = async (query) => {
  const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}`)
  const data = await res.json()
  console.log(data)
  return data
}


function App() {

  const [results, setResult] = useState([])
  // current page
  const [currentPage, setPage] = useState(1)

  const indexOfLastGig = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstGig = indexOfLastGig - ITEMS_PER_PAGE;
  const currentResults = results.slice(indexOfFirstGig, indexOfLastGig);
  const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE)

  const getGif = async (q) => {
    const { data } = await fetchGifs(q)
    setResult(data)
  }

  return (
    <div className="App">
      <h3>MoneyHop</h3>
      <Search getGif={getGif} />
      <GifResults results={currentResults} />
      <Pagination page={currentPage} pages={totalPages} changePage={setPage} />
    </div>
  );
}

export default App;
