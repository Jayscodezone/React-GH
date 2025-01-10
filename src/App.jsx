import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList.jsx";
import SelectedContact from "./components/SelectedContact.jsx";
export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  console.log (selectedContactId);
  return (
    <>
     {selectedContactId ? (
      <>
        <div>Selected Contact View</div>
      <SelectedContact contactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
        </>
      ) : (
      <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  );
}
