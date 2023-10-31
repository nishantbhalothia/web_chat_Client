
import styled from 'styled-components';

export const StyledContactsList = styled.div`
  /* Define your custom scrollbar styles here */
  height: 100%; /* Set the desired height */
  width: 100%; /* Set the desired width */
  scrollbar-color: #888 #f1f1f1; /* Color of the thumb and track */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center items vertically */
  align-items: center; /* Center items horizontally */
`;


export const ContactsListItem = styled.div`
  height: 4em;
  width: 90%;
  border-radius: 50%;
  margin: 0 0 1em 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;



export const ContactsImage = styled.div`
  height: 2em;
  width: 2em;
  border-radius: 50%;
  background-color: #D0E7D2;
  background-image: url("https://cdn-icons-png.flaticon.com/128/1144/1144760.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 1em;
`;

export const ContactsName = styled.div`
  /* Add your styles for contacts name here */
`;

export const StyledChatSectionStar = styled.div`
  /* Add your styles for chat section star here */
  height: 4em;
  width: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://cdn-icons-png.flaticon.com/128/12486/12486519.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 0 1em 0;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  padding: 2.1em;
  position: sticky;
  top: 0;
`;

export const ContactsListItemStar = styled.div`
  height: 4em;
  width: 90%;
  border-radius: 50%;
  margin: 0 0 1em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(.85);
  }
`;


export const ChatWithContact = styled.div`
  height: 4em;
  width: 99%;
  border-radius: 50%;
  margin: 0 0 1em 0;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  transition: all 0.2s ease-in-out;
  position: relative;
  top: 0;
`;


export const TextInput = styled.div`
  height: 4em;
  width: 99%;
  border-radius: 50%;
  margin: 0 0 1em 0;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  transition: all 0.2s ease-in-out;
  position: relative;
  bottom: 0;
`;