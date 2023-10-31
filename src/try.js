// import React, { useRef } from 'react';
// import {FlexBox} from '../StyledComponents/FlexBox'

// const Contacts = () => {
//   const contactsRef = useRef(null);

//   const handleScroll = (e) => {
//     const contactsElement = contactsRef.current;

//     if (contactsElement.scrollHeight > contactsElement.clientHeight) {
//       e.stopPropagation();
//     }
//   };
//   return (
//     <div ref={contactsRef} className="contacts" onScroll={handleScroll}>
//         <FlexBox style={{width:'100%'}}>
//           <h1>Contacts</h1>
//           <ul className='contacts-cont'>
//             <li className='contacts-list'>
//               <div className='contacts-img'></div>
//               <div className='contacts-name'>John Doe</div>
//             </li>
//             <li className='contacts-list'>
//               <div className='contacts-img'></div>
//               <div className='contacts-name'>John Doe</div>
//             </li>
//             <li className='contacts-list'>
//               <div className='contacts-img'></div>
//               <div className='contacts-name'>John Doe</div>
//             </li>
//             <li className='contacts-list'>
//               <div className='contacts-img'></div>
//               <div className='contacts-name'>John Doe</div>
//             </li>
//             <li className='contacts-list'>
//               <div className='contacts-img'></div>
//               <div className='contacts-name'>John Doe</div>
//             </li>
//             <li className='contacts-list'>
//               <div className='contacts-img'></div>
//               <div className='contacts-name'>John Doe</div>
//             </li>
//             <li className='contacts-list'>
//               <div className='contacts-img'></div>
//               <div className='contacts-name'>John Doe</div>
//             </li>
//             <li className='contacts-list'></li>
//             <li className='contacts-list'></li>
//             <li className='contacts-list'></li>
//             <li className='contacts-list'></li>
//           </ul>
//         </FlexBox>
//     </div>
//   )
// }

// export default Contacts