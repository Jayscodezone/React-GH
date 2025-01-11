import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList.jsx";
import {SelectedContact} from "./components/SelectedContact1.jsx";


export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  //console.log (selectedContactId);
  
  return (
    <>
     {selectedContactId ? (
        <div>
        Selected Contact View
      <SelectedContact contactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      </div>

      ) : (
      <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  );
}
