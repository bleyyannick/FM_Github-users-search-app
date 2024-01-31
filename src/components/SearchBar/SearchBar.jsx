/* eslint-disable react/prop-types */

function SearchBar( {searchValue, onSearch, onSubmit}) {
  return (
    <form onSubmit={e => onSubmit(e)}>
        <input type="text"
            value={searchValue} 
            onChange={e=> onSearch(e.target.value)} 
            placeholder="Search Github username..." />
         <button type="submit">
            Search
         </button>
    </form>
  )
}

export default SearchBar