import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password, rememberMe }, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                console.log('Response is not OK:', response);
                throw new Error('Invalid email or password');
            }

            const data = await response.json();
            const token = data.token;

            localStorage.setItem('token', token);

            if (rememberMe) {
                localStorage.setItem('token', token);
            }

            return token;

        } catch (error) {
            console.error('Error:', error);
            return rejectWithValue(error.message);
        }
    });

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            localStorage.removeItem('token');
            return null;
        } catch (error) {
            console.error('Error:', error);
            return rejectWithValue(error.message);
        }
    }
);

