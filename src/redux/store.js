// store.js
import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './services/ServicesSlice';
import serviceCategoriesReducer from './services/ServiceCategorySlice';
import addressReducer from "./profile/AddressSlice";

const store = configureStore({
  reducer: {
    services: servicesReducer,
    serviceCategories: serviceCategoriesReducer,
    address: addressReducer,
  },
});

export default store;
