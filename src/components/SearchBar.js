import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('Search for art from The MET');
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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
