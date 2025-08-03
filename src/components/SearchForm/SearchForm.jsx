import "./SearchForm.css";

function SearchForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.topic.value.trim();
    if (query) {
      console.log("Searching for:", query);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="topic"
        className="search-form__input"
        placeholder="Enter topic"
      />
      <button className="search-form__button" type="submit">
        search
      </button>
    </form>
  );
}

export default SearchForm;
