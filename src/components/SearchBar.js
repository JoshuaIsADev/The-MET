import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // //Never do this, don't get value out of input using queryselector or similar...
    // onSubmit(
    //   document.querySelector('input').value
    // );
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Search for art at The MET</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
