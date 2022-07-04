import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./locationSlice";

export default configureStore({
    reducer: {
        locations: locationReducer,
    },
});
