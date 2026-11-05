import searchImages from "./api";
import SearchBar from "./components/SearchBar";

function App() {
  async function handleSubmit(term) {
    const result = await searchImages(term);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
