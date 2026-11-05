import searchImages from "./api";

import SearchBar from "./components/SearchBar";

searchImages();

function App() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

export default App;
