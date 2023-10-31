
import React from 'react'
import Contacts from '../Components/Contacts'
import ChatSection from '../Components/ChatSection'
import StaredChat from '../Components/StaredChat'
import '../Styles/home.css'

const Home = () => {
  return (
    <div className='home-cont'>
      <Contacts />
      <ChatSection />
      <StaredChat />
    </div>
  )
}

export default Home
