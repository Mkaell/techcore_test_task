import { createSlice } from "@reduxjs/toolkit";
import { locations } from "../utils/testdata";

const locationSlice = createSlice({
    name: "locations",
    initialState: {
        locations: locations,
    },
    reducers: {
        addLocation(state, action) {
            state.locations.push({
                id: new Date().toISOString(),
                name: action.payload.location.name,
                work_week: action.payload.location.work_week,
                quota_reset: action.payload.location.quota_reset,
                year_start_month: action.payload.location.year_start_month,
                year_start_date: action.payload.location.year_start_date,
                expiry_date: action.payload.location.expiry_date,
                default: action.payload.location.default,
                week_starts_on: action.payload.location.week_starts_on,
                time_zone: action.payload.location.time_zone,
                users: action.payload.location.users,
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
