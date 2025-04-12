// src/redux/filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: ''
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    }
  }
});

// Seçici (selector) fonksiyonu: filtre değerini döndürür.
export const selectNameFilter = state => state.filters.name;

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
