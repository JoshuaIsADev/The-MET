import SearchBar from './components/SearchBar';
import searchObjects from './api';

function App() {
  const handleSubmit = async (term) => {
    const result = await searchObjects(term);

    console.log(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
