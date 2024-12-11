import React from 'react';

const FilteredList = ({ items, searchText }) => {
  // Filtrar elementos que coincidan con el texto de búsqueda
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>No se encontraron elementos</li>
        )}
      </ul>
    </div>
  );
};

export default FilteredList;
