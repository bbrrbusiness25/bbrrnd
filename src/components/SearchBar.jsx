/* eslint-disable react/prop-types */
const SearchBar = ({ searchQuery, handleSearch }) => {
  return (
    <input
      className="mt-6 flex h-10 w-full md:w-1/3 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
      type="text"
      placeholder="Search by keyword..."
      value={searchQuery}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
