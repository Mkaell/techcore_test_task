import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name: "locations",
    initialState: {
        locations: [
            {
                id: "asd2",
                name: "Miki",
            },
            {
                id: "asd22",
                name: "Ruma",
            },
            {
                id: "sdffsdf",
                name: "Australia",
            },
        ],
    },
    reducers: {
        addLocation(state, action) {
            state.locations.push({
                id: new Date().toISOString(),
                name: action.payload.name,
                completed: false,
            });
        },
        removeLocation(state, action) {
            state.locations = state.locations.filter(
                (location) => location.id !== action.payload.id
            );
        },
    },
});

export const { addLocation, removeLocation } = locationSlice.actions;

export default locationSlice.reducer;
