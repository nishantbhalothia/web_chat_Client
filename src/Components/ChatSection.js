import React, {useState, useEffect, useRef, } from 'react';
import { FlexBox, FlexBoxRow, SpaceBetweenRow } from '../StyledComponents/FlexBox'
import { ChatWithContact, ContactsImage, ContactsName, TextInput, } from '../StyledComponents/ContactBox';
import '../Styles/chat.css'

const ChatSection = () => {
  const [message, setMessage] = useState(['hello', 'how are you?']);
  const [recievedMessage, setRecievedMessage] = useState(['hi', 'i am fine']);

  const chatSectionRef = useRef(null);
  // set focus to input field
  useEffect(() => {
    // Check if the ref is not null before trying to focus
    if (chatSectionRef.current) {
      chatSectionRef.current.focus();
    }
  }, []);


  return (
    <div className="chat-section">
      <div className="chat-section-header" style={{width:'100%', height:'4em', margin:'0 0 0 10px'}}>
      <ChatWithContact>
        <SpaceBetweenRow>
          <FlexBoxRow>
            <ContactsImage />
            <ContactsName>Karishma</ContactsName>
          </FlexBoxRow>
          <FlexBoxRow>
            <div style={{ height: "2em", width: "2en", margin:'0 1em' }}>
              <span
                style={{ height: "inherit", width: "inherit" }}
                title="Menu"
              >
                <img
                  alt="Menu"
                  src="https://cdn-icons-png.flaticon.com/128/8212/8212730.png"
                  style={{ height: "inherit", width: "inherit" , cursor:'pointer'}}
                />
              </span>
            </div>
          </FlexBoxRow>
        </SpaceBetweenRow>
      </ChatWithContact>
      </div>
      {/* =========================================================================================================== */}
      {/* ==========================  user char section ============================================================= */}
      
      <div className="chat-box" style={{height:'100%', width:'100%', overflow:'scroll', border:'5px solid black', padding:'1em 0'}}>
        {message.map((msg, index) => (
          <div key={index} className="message">
            <div className="message-box-sent">
              <p>{msg}</p>
            </div>
          </div>
        ))}
        {recievedMessage.map((msg, index) => (
          <div key={index} className="message">
            <div className="message-box-received">
              <p>{msg}</p>
            </div>
          </div>
        ))}
        </div>

      {/* =========================================================================================================== */}
      <div className="texting" style={{width:'100%', height:'4em', margin:'0 0 0 10px'}}>
      <TextInput >
        <SpaceBetweenRow style={{padding:'0 1em'}}>
          <div style={{ height: "2em", width: "2en" }}>
            <span
              style={{ height: "inherit", width: "inherit" }}
              title="Attach"
            >
              <img
                alt="emoji"
                src="https://cdn-icons-png.flaticon.com/128/11600/11600258.png"
                style={{ height: "inherit", width: "inherit", cursor:'pointer' }}
              />
            </span>
          </div>
          <input 
            ref={chatSectionRef}
             style={{
              width:'85%', 
              padding:'.7em', 
              borderRadius:'25px',
              fontSize: '1.1em', // Adjust font size
              border: '1px solid #ccc', // Add border
              outline: 'none', // Remove outline
              boxShadow: 'rgba(0, 0, 0, 0.24) 3px 3px 8px',
            }}
            type="text" 
            placeholder="Type a message" 
          />
          <div style={{ height: "2.3em", width: "2.3en" }}>
            <span
              style={{ height: "inherit", width: "inherit" }}
              title="Send"
            >
              <img
                alt="send"
                src="https://cdn-icons-png.flaticon.com/128/4641/4641233.png"
                style={{ height: "inherit", width: "inherit" , cursor:'pointer' }}
              />
            </span>
          </div>
          <div style={{ height: "2em", width: "2en", margin:'0 .5em' }}>
            <span
              style={{ height: "inherit", width: "inherit" }}
              title="Mic"
            >
              <img
                alt="audio"
                src="https://cdn-icons-png.flaticon.com/128/709/709950.png"
                style={{ height: "inherit", width: "inherit" , cursor:'pointer' }}
              />
            </span>
          </div>
        </SpaceBetweenRow>
      </TextInput>
      </div>
    </div>
  )
}

export default ChatSection;







      {/* <div className="chat-box">
        {message.map((msg, index) => (
          <div key={index} className="message">
            <div className="message-box">
              <p>{msg}</p>
            </div>
          </div>
        ))}
        {recievedMessage.map((msg, index) => (
          <div key={index} className="message">
            <div className="message-box recieved">
              <p>{msg}</p>
            </div>
          </div>
        ))}
        </div> */}
