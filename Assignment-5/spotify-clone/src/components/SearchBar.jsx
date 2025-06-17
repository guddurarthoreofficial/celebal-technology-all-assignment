const SearchBar = ({ onSearch }) => (
  <input
    type="text"
    placeholder="Search for songs, artists..."
    onChange={(e) => onSearch(e.target.value)}
    className="w-full p-2 border border-gray-300 rounded"
  />
);

export default SearchBar;