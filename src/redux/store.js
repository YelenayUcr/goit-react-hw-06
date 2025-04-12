// src/redux/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

import storage from 'redux-persist/lib/storage'; // varsayılan localStorage
import { persistStore, persistReducer } from 'redux-persist';

// Sadece contacts diliminin items alanını persist etmek için whitelist kullanıyoruz.
const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'] // contacts reducer state içinde yalnızca "items" alanı saklanacak
};

const rootReducer = combineReducers({
  contacts: persistReducer(persistConfig, contactsReducer),
  filters: filtersReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // redux-persist'in kullanılan bazı action'larını dışarıda bırakıyoruz.
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
      }
    })
});

export const persistor = persistStore(store);
