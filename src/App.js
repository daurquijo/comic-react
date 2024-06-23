import React, { useEffect } from 'react';
import { Comic } from './components/Comic';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomComic } from './redux/actions';
import { Buttons } from './components/Buttons';
import { ComicList } from './components/ComicList';
import './App.css';

const App = () => {
  const comic = useSelector(state => state.comic);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomComic());
  }, [dispatch]);

  return (
    <div id="app">
      <div className="violetGradient"></div>
      <h1>Current Comic</h1>
      <Comic comic={comic} />
      <Buttons />
      <ComicList />
    </div>
  );
};

export default App;