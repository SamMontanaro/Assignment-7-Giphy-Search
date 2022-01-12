import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchField from './Components/SearchField';
import './App.css';

function App() {
  const api_key = "4Uqlux8KuvAH0FneRmAkDpYXWZsLC8rm";
  const [gifs, setGifs] = useState([]);

  const fetchTrending = async () => {
    await axios
    .get("http://api.giphy.com/v1/gifs/trending?api_key=" + api_key)
    .then(response => {
      setGifs(response.data.data);
    })
  }

  const fetchRandom = async () => {
    await axios
    .get("http://api.giphy.com/v1/gifs/random?api_key=" + api_key)
    .then(response => {
      setGifs(new Array(response.data.data));
    })
  }

  useEffect(() => {
    fetchTrending();
  }, [])

  return (
    <div className="App">
      <h1 className='p-3 bg-dark text-light text-center'>Giphy Search</h1>
      <SearchField onSubmitSearch={setGifs}></SearchField>
      <button className='btn btn-dark d-flex justify-content-center mx-auto mb-3' onClick={fetchRandom}>Random!</button>
      <div className='container'>
        <div className='row'>
          {
            gifs.map(e => {
              return <img key={e.id} className='img-fluid col-4 col-lg-2 mb-3 mx-auto' src={e.images.original.url} alt='GIPHY Results'></img>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
