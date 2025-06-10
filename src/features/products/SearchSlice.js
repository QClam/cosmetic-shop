import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    term: '',
    selectedCategory: 'all'
  },
  reducers: {
    setSearchTerm(state, action) {
      state.term = action.payload;
    },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    }
  },
});

export const { setSearchTerm, setSelectedCategory } = searchSlice.actions;
export default searchSlice.reducer;
