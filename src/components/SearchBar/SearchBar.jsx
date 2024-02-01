/* eslint-disable react/prop-types */
import { useRef } from "react";
import styles from './SearchBar.module.css'; 
import iconSearch from "../../assets/icon-search.svg"; 

function SearchBar({onSubmit}) {
  const inputRef = useRef()
  return (
    <form onSubmit={e => onSubmit(e, inputRef.current.value)}>
        <img  src={iconSearch} alt="search icon"/>
        <input type="text"
            ref={inputRef}
            placeholder="Search Github username..." />
         <button className={styles.btn_search}type="submit">Search</button>
    </form>
  )
}

export default SearchBar