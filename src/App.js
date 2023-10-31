import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import BrowserRouter and Switch
import Navbar from './Components/Navbar';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Login from './Pages/SignIn'; // Import Login component (assuming you have one)
import Signup from './Pages/SignUp'; // Import Signup component (assuming you have one)
import { ContactsProvider, useContextValue } from './context/contexts';

const App = () => {
  return (
    <div className='App'>
      <ContactsProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </Router>
      </ContactsProvider>
    </div>
  );
}

export default App;







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