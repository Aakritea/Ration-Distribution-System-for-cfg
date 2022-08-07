import { configureStore } from "@reduxjs/toolkit";
import adminReducer  from './Slices/adminSlice';
import volunteerReducer from "./Slices/volunteerSlice";

export const store=configureStore({
    reducer:{
        admin:adminReducer,
        volunteer:volunteerReducer
    }
})