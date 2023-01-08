import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*  log & pas : kir123@mail.com
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/registration',
  async (credantials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credantials);
      // console.log(res.data.token, 'auth/registration');
      setAuthHeader(res.data.token);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// /users/login
// @ POST
// {  "email": "string",  "password": "string"}

export const logIn = createAsyncThunk(
  'auth/login',
  async (credantials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credantials);
      // console.log(res.data.token, 'auth/login');
      setAuthHeader(res.data.token);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// /users/logout
// @ POST
// string(header)The token issued to the current user.

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

// /users/current
// @ GET
// Get information about current user

export const refreshUser = createAsyncThunk(
  'auth/refreshing',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    // console.log(persistedToken, 'Auth operation <- persistedToken');
    if (persistedToken === null) {
      // console.log('persistedToken === null');
      return thunkAPI.rejectWithValue('Have to fetching User');
    }
    // console.log('Refreshing USER');
    setAuthHeader(persistedToken, 'after IF');
    try {
      // If there is a token, add it to the HTTP header and perform the request
      const res = await axios.get('/users/current');
      // console.log(res.data, 'Auth operation <- /users/current');
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
