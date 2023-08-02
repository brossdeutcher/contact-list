import { useState, useEffect } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact'

function App() {

  const [contactId, setContactId] = useState(null);
  
  useEffect(() => {setContactId(1)}, [])
  

  return (
    <>
      {!contactId && <ContactList />}
      {contactId && <SelectedContact setContactId={setContactId} />}
    </>
  )
}

export default App
