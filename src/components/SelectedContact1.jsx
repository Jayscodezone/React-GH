import React, { useState, useEffect } from "react";

export const SelectedContact = ({ contactId, setSelectedContactId }) => {
  // export default function SelectedContact =({contactId, setSelectedContactId}) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${contactId}`
        );
        const data = await response.json();
        setContact(data); // Set the contact data from the API
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    };

    // fetch if contactId is provided
    if (contactId) {
      fetchContact();
    }
  }, [contactId]);

  console.log(contact);
  return (
    <>
      {contact ? (
        <div>
          <h1>{contact.name}</h1>
          <h1>{contact.email}</h1>
          <p>Phone: {contact.phone}</p>
          <a onClick={() => setSelectedContactId(null)}>
            <button>Back</button>
          </a>
        </div>
      ) : (
        <p>Loading contact...</p>
      )}
    </>
  );
};
//export default SelectedContact;

//Psuedo Code
// Step 1 was to create a file call SelectedContact.JSX in order for the selectcontact to exist in the react
// Just like puppy pal data.JS the SelectedContact is the variable that has to be declared in an array
//within that array is the data of the Selected Contact Id , Contact, name, Contact phone and Contact email.
// then at the end it has to be exported
// the SelectedContactId has to be passed in the both the app.jsx and contactlist.jsx as a set component and within the useState
