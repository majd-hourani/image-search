import { useState } from "react";

function SearchBar() {
  const [term, setTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setTerm("");
  }

  function handleChange(event) {
    setTerm(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={handleChange} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
