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
export const addVehicleTypesAction = createAsyncThunk(
  'users/addVehicletypes',
  async (vehicleTypes) => {
    // Wrap vehicleType in an object
    const requestBody = { vehicleType: vehicleTypes }; // vehicleTypes should be a string
    console.log(requestBody, " data coming");

    const response = await axios.post('/api/addVehicleType', requestBody); // Ensure the right payload
    console.log(response, "vehicletypes");

    return response.data; // Return the data (success message and added entry)
  }
);
export const addLocationAction = createAsyncThunk(
  'users/addLocation',
  async (addLocation) => {
    // Wrap vehicleType in an object
    const requestBody = { addLocation: addLocation }; // vehicleTypes should be a string
    console.log(requestBody, " data coming");

    const response = await axios.post('/api/addLocation', requestBody); // Ensure the right payload
    console.log(response, "addLocation");

    return response.data; // Return the data (success message and added entry)
  }
);
export const getLocationAction = createAsyncThunk(
  'users/getLocation',
  async (getLocation) => {


    const response = await axios.get('/api/getLocationData', getLocation); // Ensure the right payload
    console.log(response, "addLocation");

    return response.data; // Return the data (success message and added entry)
  }
);
export const addFreightChargeAction = createAsyncThunk(
  'users/addFreightCharge',
  async (addFreightChargeData) => {
    // Wrap vehicleType in an object
    const requestBody = { addFreightChargeData: addFreightChargeData }; // vehicleTypes should be a string
    console.log(requestBody, " data coming");

    const response = await axios.post('/api/freightChargeType', requestBody); // Ensure the right payload
    console.log(response, "FreightCharge");

    return response.data; // Return the data (success message and added entry)
  }
);
export const getFreightChargeAction = createAsyncThunk(
  'users/getFreightCharge',
  async (getFreightCharge) => {


    const response = await axios.get('/api/getFreightChargeType', getFreightCharge); // Ensure the right payload
    console.log(response, "getFreightCharge");

    return response.data; // Return the data (success message and added entry)
  }
);
export const addPackingTypesAction = createAsyncThunk(
  'users/addPackingType',
  async (addPackingData) => {
    // Wrap addPackingData in an object
    // const requestBody = { addPackingDatas: addPackingData };
    const requestBody = { packingType: addPackingData };
    console.log(requestBody, " data coming");

    const response = await axios.post('/api/addPackingType', requestBody); // Ensure the right payload
    console.log(response, "addPackingData");

    return response.data; // Return the data (success message and added entry)
  }
);
export const getPackingTypesAction = createAsyncThunk(
  'users/getPackingType',
  async (getFreightChargeData) => {
    // Wrap addFreightChargeData in an object
    const requestBody = { getFreightChargeData: getFreightChargeData };
    console.log(requestBody, " data coming");

    const response = await axios.get('/api/getPackingType', requestBody); // Ensure the right payload
    console.log(response, "getFreightChargeData");

    return response.data; // Return the data (success message and added entry)
  }
);
export const addConsignerAction = createAsyncThunk(
  'users/addConsigners',
  async (addConsignerData) => {

    const requestBody = { Consigner: addConsignerData };
    console.log(requestBody, " data coming");

    const response = await axios.post('/api/addConsigner', requestBody); // Ensure the right payload
    console.log(response, "addConsigner");

    return response.data; // Return the data (success message and added entry)
  }
);

export const getConsignerAction = createAsyncThunk(
  'consigners/getConsigner',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/getConsignerData');
      // Assuming the API response structure is { consigners: [...] }
      return { data: response.data.consigners };
    } catch (error) {
      // If the error has a response, use the response's message, otherwise use a default error message
      const errorMessage = error.response?.data?.message || 'Failed to fetch consigners';
      return rejectWithValue(errorMessage);
    }
  }
);
// export const getConsignerAction = createAsyncThunk(
//   'users/getPackingType',
//   async (getConsignerData) => {
//     // Wrap addFreightChargeData in an object
//     const requestBody = { getConsignerData: getConsignerData };
//     console.log(requestBody, " data coming");

//     const response = await axios.get('/api/getConsignerData', requestBody); // Ensure the right payload
//     console.log(response, "getConsignerData");

//     return response.data; // Return the data (success message and added entry)
//   }
// );
export const addBrokerAction = createAsyncThunk(
  'users/addBroker',
  async (addBrokerData) => {

    const requestBody = { Broker: addBrokerData };
    console.log(requestBody, " data coming");

    const response = await axios.post('/api/addBrokers', requestBody); // Ensure the right payload
    console.log(response, "addBrokers");

    return response.data; // Return the data (success message and added entry)
  }
);
export const getBrokersAction = createAsyncThunk(
  'users/getBrokers',
  async (getBrokersData) => {
    const requestBody = { getBrokersData: getBrokersData };
    console.log(requestBody, " data coming");

    const response = await axios.get('/api/getBrokersData', requestBody); // Ensure the right payload
    console.log(response, "getBrokersData");

    return response.data; // Return the data (success message and added entry)
  }
);

// BRANCHES
export const addBranchAction = createAsyncThunk(
  'users/addBranch',
  async (addBranchData) => {

    const requestBody = { Branch: addBranchData };
    console.log(requestBody, " data coming");

    const response = await axios.post('/api/addBranches', requestBody); // Ensure the right payload
    console.log(response, "addBranchess");

    return response.data; // Return the data (success message and added entry)
  }
);
export const getBranchAction = createAsyncThunk(
  'users/getBrokers',
  async (getBranchesData) => {
    const requestBody = { getBranchData: getBranchesData };
    console.log(requestBody, " data coming");

    const response = await axios.get('/api/getBranches', requestBody); // Ensure the right payload
    console.log(response, "getBranches");

    return response.data; // Return the data (success message and added entry)
  }
);
// OpeningBillsForm
export const addOpeningBillsAction = createAsyncThunk(
  'users/addOpen',
  async (openingData) => {

    const requestBody = { Bill: openingData };
    console.log(requestBody, " data coming");

    const response = await axios.post('/api/addOpeningData', requestBody); // Ensure the right payload
    console.log(response, "addOpeningData");

    return response.data; // Return the data (success message and added entry)
  }
);
// Redux slice
const userSlice = createSlice({
  name: "users",
  initialState: {
    allLRS: [],
    allVehicleTypes: [],// Stores the list of LRs
    allPackingTypes: [],
    allConsigner: [],
    allBrokers: [],
    allBranches: [],
    Bill: [],
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
    builder
      .addCase(addVehicleTypesAction.pending, (state) => {
        state.status = 'loading'; // When the update request is in progress
      })
      .addCase(addVehicleTypesAction.fulfilled, (state, action) => {
        state.status = 'succeeded'; // When the update request succeeds
        state.allVehicleTypes.push(action.payload.data);


      })
      .addCase(addVehicleTypesAction.rejected, (state, action) => {
        state.status = 'failed'; // When the update request fails
        state.error = action.error.message; // Store the error message
      });
    builder
      .addCase(addPackingTypesAction.pending, (state) => {
        state.status = 'loading'; // When the update request is in progress
      })
      .addCase(addPackingTypesAction.fulfilled, (state, action) => {
        state.status = 'succeeded'; // When the update request succeeds
        state.allPackingTypes.push(action.payload.data);


      })
      .addCase(addPackingTypesAction.rejected, (state, action) => {
        state.status = 'failed'; // When the update request fails
        state.error = action.error.message; // Store the error message
      })
      .addCase(addConsignerAction.pending, (state) => {
        state.status = 'loading'; // When the update request is in progress
      })
      .addCase(addConsignerAction.fulfilled, (state, action) => {
        state.status = 'succeeded'; // When the update request succeeds
        state.allConsigner.push(action.payload.data);
      })
      .addCase(addConsignerAction.rejected, (state, action) => {
        state.status = 'failed'; // When the update request fails
        state.error = action.error.message; // Store the error message
      })
      .addCase(getConsignerAction.pending, (state) => {
        state.status = 'loading'; // When the update request is in progress
      })
      .addCase(getConsignerAction.fulfilled, (state, action) => {
        state.status = 'succeeded'; // When the update request succeeds
        state.allConsigner = action.payload.data;
      })
      .addCase(getConsignerAction.rejected, (state, action) => {
        state.status = 'failed'; // When the update request fails
        state.error = action.error.message; // Store the error message
      })

      .addCase(addBrokerAction.pending, (state) => {
        state.status = 'loading'; // When the update request is in progress
      })
      .addCase(addBrokerAction.fulfilled, (state, action) => {
        state.status = 'succeeded'; // When the update request succeeds
        state.allBrokers.push(action.payload.broker);
      })
      .addCase(addBrokerAction.rejected, (state, action) => {
        state.status = 'failed'; // When the update request fails
        state.error = action.error.message; // Store the error message
      })

      .addCase(addBranchAction.pending, (state) => {
        state.status = 'loading'; // When the update request is in progress
      })
      .addCase(addBranchAction.fulfilled, (state, action) => {
        state.status = 'succeeded'; // When the update request succeeds
        state.allBranches.push(action.payload.data);
      })
      .addCase(addBranchAction.rejected, (state, action) => {
        state.status = 'failed'; // When the update request fails
        state.error = action.error.message; // Store the error message
      })

      .addCase(addOpeningBillsAction.pending, (state) => {
        state.status = 'loading'; // When the update request is in progress
      })
      .addCase(addOpeningBillsAction.fulfilled, (state, action) => {
        state.status = 'succeeded'; // When the update request succeeds
        state.Bill.push(action.payload.data);


      })
      .addCase(addOpeningBillsAction.rejected, (state, action) => {
        state.status = 'failed'; // When the update request fails
        state.error = action.error.message; // Store the error message
      })

  },
});

// Export the reducer to be used in the store
export default userSlice.reducer;
