function SearchBar({ search, setSearch }: { search: string; setSearch: (search: string) => void }) {
  return (
    <input
      type='text'
      placeholder='Search'
      className='search-bar'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default SearchBar
