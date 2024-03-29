/* eslint-disable react/prop-types */
import { useRef } from "react";
import styles from './SearchBar.module.css'; 
import iconSearch from "../../assets/icon-search.svg"; 

function SearchBar({onSubmit}) {
  const inputRef = useRef()
  return (
    <form onSubmit={e => onSubmit(e, inputRef.current.value)}>
        <img className={styles.iconSearch} src={iconSearch} alt="search bar icon"/>
        <input type="text" ref={inputRef} placeholder="Search Github username..." />
        <div className={styles.error}>
          <p></p>
        </div>
        <button className={styles.btn_search}type="submit">Search</button>
    </form>
  )
}

export default SearchBar