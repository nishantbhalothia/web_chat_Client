import React, { useRef } from "react";
import {
  FlexBox,
  FlexBoxRow,
  SpaceBetweenRow,
} from "../StyledComponents/FlexBox";

// imported styled components from src/StyledComponents/ContactBox.js
import {
  StyledContactsList,
  ContactsListItem,
  ContactsImage,
  ContactsName,
} from "../StyledComponents/ContactBox";
import { useContextValue } from "../context/contexts";

const Contacts = () => {
  const contactsRef = useRef(null);
  const [contacts,setContacts] = useContextValue();
  // console.log(contacts);

  return (
    <div ref={contactsRef} className="contacts">
      <FlexBox>
        {/* ====================== User area ========================= */}
        <ContactsListItem style={{ borderRadius: "0px", width: "100%" }}>
          <SpaceBetweenRow>
            <FlexBoxRow>
              <ContactsImage />
              <ContactsName>Nishant</ContactsName>
            </FlexBoxRow>
            <FlexBoxRow>
              {/* =============================    New Chat ================================ */}
              <div style={{ height: "2em", width: "2en" }}>
                <span
                  style={{ height: "inherit", width: "inherit" }}
                  title="New Chat"
                >
                  <img
                    alt="new chat"
                    src="https://cdn-icons-png.flaticon.com/128/8173/8173351.png"
                    style={{ height: "inherit", width: "inherit" }}
                  />
                </span>
              </div>
              {/* =============================    Status  ================================ */}
              <div style={{ height: "2em", width: "2en" }}>
                <span
                  style={{ height: "inherit", width: "inherit" }}
                  title="Staus"
                >
                  <img
                    alt="status"
                    src="https://cdn-icons-png.flaticon.com/128/5978/5978299.png"
                    style={{
                      height: "inherit",
                      width: "inherit",
                      margin: "0 1em",
                    }}
                  />
                </span>
              </div>
              {/* =============================    Menu  ================================ */}
              <div style={{ height: "2em", width: "2en" }}>
                <span
                  style={{ height: "inherit", width: "inherit" }}
                  title="Menu"
                >
                  <img
                    alt="menu"
                    src="https://cdn-icons-png.flaticon.com/128/3838/3838646.png"
                    style={{
                      height: "inherit",
                      width: "inherit",
                      margin: "0 1em",
                    }}
                  />
                </span>
              </div>
              {/* ================================================================================ */}
            </FlexBoxRow>
          </SpaceBetweenRow>
        </ContactsListItem>
        <h1 style={{ textAlign: "left !important", marginBottom: ".7em" }}>
          Your Contacts
        </h1>
        {/* ====================== Contacts area ========================= */}
        <StyledContactsList className="contacts-cont">
        {/* {[...Array(20).keys()].map((index) => ( */}
          {contacts.map((data,index) => (
            <ContactsListItem className="contacts-list" key={index}>
              <ContactsImage />
              <ContactsName>{`${data.name} ${data.number}`}</ContactsName>
            </ContactsListItem>
          ))}
        </StyledContactsList>
      </FlexBox>
    </div>
  );
};

export default Contacts;
