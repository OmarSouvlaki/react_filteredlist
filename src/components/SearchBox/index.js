import React from 'react';

const SearchBox = ({ onSearchChange }) => {
  return (
    <div>
      <label htmlFor="search" className="search-label">Buscar:</label>
      <input
        id="search"
        type="text"
        placeholder="Escribe para filtrar..."
        onChange={onSearchChange}
        aria-label="Campo de búsqueda"
      />
    </div>
  );
};

export default SearchBox;