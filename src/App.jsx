import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AuthorProfile from './components/AuthorProfile';
import Context from "./components/Context";
import reducer from "./components/reducer";
import { useReducer } from 'react';
import MySlider from './Slider';
import SubpageLayout from './components/SubpageLayout';
import Image from './components/Image';

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [state, dispatch] = useReducer(reducer, {
    image: {
      width: 400,
      height: 400
    },
    sliderRate: 50,
  });

  const loadImg = async () => {
    if (!query) return;
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${import.meta.env.VITE_UNSPLASH_KEY}`
      );
      const data = await response.json();
      setResult(data.results);
    } catch (error) {
      console.error("Error fetching images:", error);
      setResult([]); 
    }
  };

  return (
 
  <>
       <header className="site-header">
        <h1>ImageShare - Discover the World in Photos</h1>
      </header>
     <BrowserRouter>
     <Context.Provider value={{ state, dispatch }}>
          <SearchBar query={query} setQuery={setQuery} onSearch={loadImg}/>
        
          <Routes>
              <Route path="/" element={ <Homepage /> } />
              <Route path="/" element={<SubpageLayout />}>
                  <Route path="/search/:query" element={  <SearchResults query={query} result={result}/> } />
                  <Route path="/author/:username" element={ <AuthorProfile/>} />
                  <Route path="/photos/:id" element={ <Image/>} />
                  
              </Route>
          </Routes>
       </Context.Provider>
      </BrowserRouter>
  </>
  )
}

export default App
