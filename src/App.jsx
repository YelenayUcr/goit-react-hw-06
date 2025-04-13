import React, { useEffect } from 'react';
import ContactsForm from './components/ContactsForm/ContactsForm';
import SearchBox from './components/SearchBox/SearchBox';
import Contact from './components/Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, loadContacts } from './redux/contactsSlice';
import { selectNameFilter } from './redux/filtersSlice';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(loadContacts());
    }
  }, [dispatch, contacts.length]);

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
