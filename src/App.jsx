import { useState } from "react";
import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  async function handleSubmit(term) {
    const result = await searchImages(term);
    setImages(result);
  }

  return (
    <div className="app">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
