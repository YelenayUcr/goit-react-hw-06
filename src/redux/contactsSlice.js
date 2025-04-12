// src/redux/contactsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: []
  },
  reducers: {
    addContact: (state, action) => {
      // Yeni iletişim ekleme (action.payload: { id, name, ... })
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      // action.payload olarak iletilen id'ye göre silme işlemi
      state.items = state.items.filter(contact => contact.id !== action.payload);
    }
  }
});

// Seçici (selector) fonksiyonu: items listesini döndürür
export const selectContacts = state => state.contacts.items;

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
