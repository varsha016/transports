import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for adding all LRs
export const addAllLRsAction = createAsyncThunk(
  'users/addAllLRs',
  async (lrEntryData) => {
    const response = await axios.post('/api/LREntry', lrEntryData);
    return response.data; // Return the data (success message and added entry)
  }
);

// Async thunk for fetching all LRs
export const fetchAllLRsAction = createAsyncThunk(
  'users/fetchAllLRs',
  async () => {
    const response = await axios.get('/api/getLREntry');
    return response.data; // Return the fetched data
  }
);

// Async thunk for updating an LR
export const updateLRAction = createAsyncThunk(
    'lr/update',
    async (lrData, { rejectWithValue }) => {
        try {
            const response = await axios.put(`/api/updateLREntry`, lrData);
            return response.data; // Return the updated data
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);


// Redux slice
const userSlice = createSlice({
  name: "users",
  initialState: {
    allLRS: [],       // Stores the list of LRs
    status: 'idle',   // To track the status of requests (idle, loading, succeeded, failed)
    error: null,      // To store any error messages
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle addAllLRsAction (adding LRs)
    builder
      .addCase(addAllLRsAction.pending, (state) => {
        state.status = 'loading'; // When the add LR request is in progress
      })
      .addCase(addAllLRsAction.fulfilled, (state, action) => {
        state.status = 'succeeded'; // When the add LR request succeeds
        state.allLRS.push(action.payload.data); // Assuming action.payload contains the newly added LR
      })
      .addCase(addAllLRsAction.rejected, (state, action) => {
        state.status = 'failed'; // When the add LR request fails
        state.error = action.error.message; // Store the error message
      });

    // Handle fetchAllLRsAction (fetching LRs)
    builder
      .addCase(fetchAllLRsAction.pending, (state) => {
        state.status = 'loading'; // When the fetch request is in progress
      })
      .addCase(fetchAllLRsAction.fulfilled, (state, action) => {
        state.status = 'succeeded'; // When the fetch request succeeds
        state.allLRS = action.payload.data; // Store the fetched LRs in state
      })
      .addCase(fetchAllLRsAction.rejected, (state, action) => {
        state.status = 'failed'; // When the fetch request fails
        state.error = action.error.message; // Store the error message
      });

    // Handle updateLRAction (updating LRs)
   builder
  .addCase(updateLRAction.pending, (state) => {
    state.status = 'loading'; // When the update request is in progress
  })
  .addCase(updateLRAction.fulfilled, (state, action) => {
    state.status = 'succeeded'; // When the update request succeeds
    const index = state.allLRS.findIndex(lr => lr.id === action.payload.data.id); // Assuming id is the identifier
    console.log(index, 'index');
    
    if (index !== -1) {
      state.allLRS[index] = action.payload.data; // Replace the updated LR in the state
    }
  })
  .addCase(updateLRAction.rejected, (state, action) => {
    state.status = 'failed'; // When the update request fails
    state.error = action.error.message; // Store the error message
  });

  },
});

// Export the reducer to be used in the store
export default userSlice.reducer;
