import React from 'react';
import {FlexBox} from '../StyledComponents/FlexBox'
import {
  StyledContactsList,
  ContactsListItemStar,
  ContactsImage,
  StyledChatSectionStar,
} from "../StyledComponents/ContactBox";

const StaredChat = () => {
  return (
    <div className="stared-chat">
      <FlexBox>
        <StyledChatSectionStar />
        <StyledContactsList className="contacts-cont">
          {[...Array(10).keys()].map((index) => (
            <ContactsListItemStar className="contacts-list" key={index}>
              <span title="User Name"><ContactsImage /></span> {/* by wrapping in span and giving title we can show ToolTips */}
              {/* <ContactsImage /> */}
              {/* <ContactsName>John Doe</ContactsName> */}
            </ContactsListItemStar>
          ))}
        </StyledContactsList>
      </FlexBox>
    </div>
  )
}

export default StaredChat

