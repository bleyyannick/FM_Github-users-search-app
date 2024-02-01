/* eslint-disable react/prop-types */

import { useRef } from "react"

function SearchBar({onSubmit}) {
  const inputRef = useRef()
  return (
    <form onSubmit={e => onSubmit(e, inputRef.current.value)}>
        <input type="text"
            ref={inputRef}
            placeholder="Search Github username..." />
         <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar