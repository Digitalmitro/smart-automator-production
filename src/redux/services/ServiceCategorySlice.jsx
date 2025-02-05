// serviceCategoriesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {Api} from '../../network/Api'; 


export const fetchServiceCategories = createAsyncThunk(
  'serviceCategories/fetchServiceCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await Api.get(`/client/service-categories`);
      return response.data.categories;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const serviceCategoriesSlice = createSlice({
  name: 'serviceCategories',
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServiceCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServiceCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchServiceCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default serviceCategoriesSlice.reducer;
