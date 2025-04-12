// src/App.jsx
import React from 'react';
import ContactsForm from './components/ContactsForm/ContactsForm';
import SearchBox from './components/SearchBox/SearchBox';
import Contact from './components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts } from './redux/contactsSlice';
import { selectNameFilter } from './redux/filtersSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadContacts } from './redux/contactsSlice';

function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);
  
  // İsim filtresi uygulanarak kontak listesi oluşturuluyor.
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Communication Book</h1>
      <ContactsForm />
      <SearchBox />
      <h2>Directory</h2>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default App;
