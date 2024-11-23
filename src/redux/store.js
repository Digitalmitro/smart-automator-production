// store.js
import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './services/ServicesSlice';
import serviceCategoriesReducer from './services/ServiceCategorySlice';

const store = configureStore({
  reducer: {
    services: servicesReducer,
    serviceCategories: serviceCategoriesReducer,
  },
});

export default store;
