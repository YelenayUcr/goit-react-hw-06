// src/App.jsx
import React from 'react';
import ContactsForm from './components/ContactsForm/ContactsForm';
import SearchBox from './components/SearchBox/SearchBox';
import Contact from './components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts } from './redux/contactsSlice';
import { selectNameFilter } from './redux/filtersSlice';

function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  
  // İsim filtresi uygulanarak kontak listesi oluşturuluyor.
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>İletişim Kitabı</h1>
      <ContactsForm />
      <SearchBox />
      <h2>Rehber</h2>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default App;
