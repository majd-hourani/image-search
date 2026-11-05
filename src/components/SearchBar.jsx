import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(term);
    setTerm("");
  }

  function handleChange(event) {
    setTerm(event.target.value);
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={handleChange} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
