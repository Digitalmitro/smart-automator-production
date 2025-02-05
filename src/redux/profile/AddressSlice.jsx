

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Api } from "../../network/Api";
// Base URL for address-related API


// Fetch all addresses
export const fetchAddresses = createAsyncThunk("address/fetchAddresses", async () => {
  const response = await Api.get(`/address/${userid}`); // Fetch all addresses
  console.log("respodn", response.data)
  return response.data;
});

// Fetch address by ID
export const FetchAddressById = createAsyncThunk("address/fetchAddressById", async (id) => {
  const response = await Api.get(`/address/${id}`); // Fetch address by ID
  return response.data;
});

// Create a new address
export const createAddress = createAsyncThunk("address/createAddress", async (newAddress) => {
  const response = await Api.post('/address', newAddress); // Create a new address
  return response.data;
});

// Update an address
export const updateAddress = createAsyncThunk("address/updateAddress", async ({ id, updatedData }) => {
  const response = await Api.put(`/address/${id}`, updatedData); // Update address by ID
  console.log("updatedData", updatedData)
  return response.data;
});

// Delete an address
export const deleteAddress = createAsyncThunk("address/deleteAddress", async (id) => {
  await Api.delete(`/address/${id}`); // Delete address by ID
  const response = await Api.get(`/address/${userid}`);
  return id; // Return the deleted address ID to update the state
});

const addressSlice = createSlice({
  name: "address",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all addresses
      .addCase(fetchAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
  console.log("respodn", action.payload)

        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Fetch address by ID
      .addCase(FetchAddressById.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchAddressById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.data.findIndex((addr) => addr._id === action.payload._id);
        if (index === -1) state.data.push(action.payload);
      })
      .addCase(FetchAddressById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Create new address
      .addCase(createAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(createAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload); // Add new address to the state
      })
      .addCase(createAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Update an address
      .addCase(updateAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        console.log("paylod", action.payload)
        state.loading = false;
        const index = state.data.findIndex((addr) => addr._id === action.payload._id);
        if (index !== -1) state.data[index] = action.payload; // Update the address in the state
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Delete an address
      .addCase(deleteAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter((addr) => addr._id !== action.payload); // Remove deleted address
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default addressSlice.reducer;
