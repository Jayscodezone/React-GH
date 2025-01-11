
export const SelectedContact =({contactId, setSelectedContactId}) => {
   // export default function SelectedContact =({contactId, setSelectedContactId}) => {

    return(
        <>
            <h1>{contactId.name}</h1>
            <h1>{contactId.email}</h1>
            <a onClick={() => setSelectedContactId(null)}>
                <button>Back</button>
            </a>
        </>
    )
}
//export default SelectedContact;


//Psuedo Code 
  // Step 1 was to create a file call SelectedContact.JSX in order for the selectcontact to exist in the react 
  // Just like puppy pal data.JS the SelectedContact is the variable that has to be declared in an array 
  //within that array is the data of the Selected Contact Id , Contact, name, Contact phone and Contact email.
  // then at the end it has to be exported 
  // the SelectedContactId has to be passed in the both the app.jsx and contactlist.jsx as a set component and within the useState 

