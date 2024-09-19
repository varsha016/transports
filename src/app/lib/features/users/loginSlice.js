import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Helper function to save to local storage
const saveToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to local storage', error);
  }
};

// Helper function to load from local storage
const loadFromLocalStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error loading from local storage', error);
    return null;
  }
};

// Initial state
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  error: null,
  userType: '',
  status: 'idle', // status can be 'idle' | 'loading' | 'succeeded' | 'failed'
  ...loadFromLocalStorage('authState'), // Load initial state from local storage if available
};
console.log(loadFromLocalStorage('authState'), "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
// Async thunk for login
export const loginAsync = createAsyncThunk(
  'auth/login',
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/login', loginData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


export const addMemoAction = createAsyncThunk("add/memo", async(memoData, { rejectWithValue }) => {
  try {
  console.log(memoData, "memoData");
  
      const response = await axios.post('/api/addMemo', memoData);
    console.log(response, "response");
    return response?.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }

  
)

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    setUserAndToken: (state, action) => {
      console.log("hello Slice");
     const { token, userType, user } = action.payload || {};
if (token) {
    state.token = token;
    state.isAuthenticated = true;
    state.userType = userType;
    state.user = user;  // Update user in the state
    saveToLocalStorage('authState', {
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        userType: state.userType,
        user: state.user,
    });
}

    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.userType = '';
      state.status = 'idle';

      // Remove from local storage
      localStorage.removeItem('authState');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
     .addCase(loginAsync.fulfilled, (state, action) => {
  state.status = 'succeeded';
  state.token = action.payload.token; // This must be set to the token
  state.userType = action.payload.userType;
  state.isAuthenticated = !!action.payload.token;
  state.user = action.payload.user;
state.status = 'succeeded';
  // Save to local storage
  saveToLocalStorage('authState', {
    token: state.token,
    isAuthenticated: state.isAuthenticated,
    userType: state.userType,
    user: state.user, // Ensure you're saving the user data too
  });
})
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      });
  },
});

// Export actions and reducer
export const { setUserAndToken, logout } = authSlice.actions;
export default authSlice.reducer;
