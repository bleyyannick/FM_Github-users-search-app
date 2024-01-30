/* eslint-disable no-undef */

import { useEffect } from 'react'
import './App.css';

const BASE_URL = import.meta.env.VITE_APP_GITHUB_URL; 
const REACT_APP_GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN

function App() {

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await fetch(`${BASE_URL}/users/bradtraversy`, {
        method: "GET", 
        headers : {
          Authorization: `Bearer ${REACT_APP_GITHUB_TOKEN}`
        }
        
      }); 
      console.log(userInfo.status)
      const response = await userInfo.json(); 
      console.log(response.bio)
  
    }; 
    fetchUser();
      
  }, [])

  return (
   <>
   </>
  )
}

export default App
