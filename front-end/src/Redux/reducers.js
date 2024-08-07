import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: {
        firstName: "",
        lastName: "",
        userName: "",
    },
    token: null,
    error: null,
};