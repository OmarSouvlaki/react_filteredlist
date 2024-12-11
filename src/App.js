import React, { useState } from 'react';
import FilteredList from './components/FilteredList';
import SearchBox from './components/SearchBox';
import './App.css';

const App = () => {

  const [items] = useState([
     'El Silencio de los Inocentes, 1997',
     'Trainspotting, 1993',
     'Requiem por un Sueño, 2001',
     'El club de la Pelea, 2004',
     'Hooligans, 2001',
     'Donnie Darko, 1989',
  ]);
  

  const [searchText, setSearchText] = useState('');


  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="App">
      <h1>Filtrar Elementos</h1>
      <SearchBox onSearchChange={handleSearchChange} />
      <FilteredList items={items} searchText={searchText} />
    </div>
  );
};

export default App;
