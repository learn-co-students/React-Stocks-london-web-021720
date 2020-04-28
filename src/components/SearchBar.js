import React, { useImperativeHandle } from 'react';

const SearchBar = ({sortType, handleOnChange}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="alphabetical" name='sort' checked={sortType === 'alphabetical'} onChange={handleOnChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="price" name='sort' checked={sortType === 'price'} onChange={handleOnChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleOnChange} name='filter'>
          <option value="all">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
