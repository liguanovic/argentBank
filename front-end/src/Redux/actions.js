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
        const errorData = await response.json();
        throw new Error(errorData.message || 'Invalid email or password');
      }

      const data = await response.json();
      const token = data.body.token;

      if (!token) {
        throw new Error('Token not found in response');
      }

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
      sessionStorage.removeItem('token');
      return null;
    } catch (error) {
      console.error('Error:', error);
      return rejectWithValue(error.message);
    }
  }
);

export const getProfile = createAsyncThunk(
  'auth/getProfile',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.token;
      // const token = localStorage.getItem('token');

      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch profile, status: ${response.status}`);
      }

      const data = await response.json();

      if (!data || !data.body) {
        throw new Error('Invalid profile data');
      }

      return data.body;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editUsername = createAsyncThunk(
  'auth/editUsername',
  async (newuserName, { rejectWithValue, getState }) => {
    try {

      const state = getState();
      const token = state.auth.token;

      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newuserName),
      });

      if (!response.ok) {
        const error = await response.json();
        console.log('Erreur :', error);
        throw new Error('Failed to edit username');
      }

      const data = await response.json();

      return data.body.userName;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


