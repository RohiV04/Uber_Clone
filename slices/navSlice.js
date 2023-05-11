import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  //distance:null,
  travelTime: null,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    //setDistance:(state,action)=>{
    //    state.distance=action.payload
    //    },
    setTravelTime: (state, action) => {
        state.travelTime = action.payload;
        },
  },
});

export const {setOrigin,setDestination,setTravelTime}=navSlice.actions;
export const SelectOrigin=(state)=>state.nav.origin;
export const SelectDestination=(state)=>state.nav.destination;
export const SelectTravelTime=(state)=>state.nav.travelTime;

export default navSlice.reducer;
