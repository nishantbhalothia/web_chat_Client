import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import './Styles/App.css'
import Home from './Pages/Home'
import { ContactsProvider , useContextValue } from './context/contexts'

const App = () => {

  

  return (
    <div className='App'>
      
      <ContactsProvider>
        <Navbar />
        <Home />
      </ContactsProvider>
    </div>
  )
}

export default App







// useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8000/contacts');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       console.log(data.contacts);
  //       // we are getting message and array of contacts from the api (ie why we are using data.contacts)
  //       const contacts = data.contacts;
  //     } catch (error) {
  //       console.error('Error fetching Contacts data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);