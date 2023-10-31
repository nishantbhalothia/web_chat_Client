import React ,{createContext,useContext,useState, useEffect} from "react";

export const ContactsContext = createContext();

export const useContextValue = () => {
    const value = useContext(ContactsContext);
    return value;
  };

export const ContactsProvider = (props) => {
    const [contacts,setContacts] = useState([]);

    // ====================================================================================================
    // ===================================== Fetching Contacts from api =======================================
    useEffect(() => {
        const fetchContacts = async () => {
          try {
            const response = await fetch('http://localhost:8000/contacts');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // console.log(data.contacts);
            // we are getting message and array of contacts from the api (ie why we are using data.contacts)
            const contacts = data.contacts;
            setContacts(contacts);
            // console.log(contacts);
          } catch (error) {
            console.error('Error fetching Contacts data:', error);
          }
        };
        fetchContacts();
      }, []);

    return(
        <ContactsContext.Provider value={[contacts,setContacts]}>
            {props.children}
        </ContactsContext.Provider>
    )
}