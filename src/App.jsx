/* eslint-disable no-undef */

import { useEffect, useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import UserInfo from './components/UserInfo/UserInfo';

const BASE_URL = import.meta.env.VITE_APP_GITHUB_URL; 
const REACT_APP_GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN

function App() {
  const [user, setUser] = useState({});
  const [query, setQuery] = useState('octocat');

  useEffect(() => {
    const fetchUser = async () => {
      try{
        const response = await fetch(`${BASE_URL}/users/${query}`, {
          method: "GET", 
          headers : {
            Authorization: `Bearer ${REACT_APP_GITHUB_TOKEN}`
          }
          
        }); 
        if(!response.ok) throw new Error("No user found"); 
        const data = await response.json(); 
        setUser(data);
      } catch(err) {
        throw new Error(err.message)
      }
    };
    fetchUser();   
  }, [query])

  
  const handleSubmit = (e, value) => {
      e.preventDefault(); 
      setQuery(value)
  }
  return (
   <>
    <Header />
    <SearchBar 
     onSubmit={handleSubmit}  />
    <UserInfo user={user} />
   </>
  )
}

export default App
