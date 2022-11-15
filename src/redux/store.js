import { configureStore } from "@reduxjs/toolkit";

import changeTheme from "./slices/themeSlice";
import loading from "./slices/loadingSlice";
import date from "./slices/daySlice";
import search from './slices/searchSlice';

export const store = configureStore({
	reducer: {
		changeTheme,
		loading,
		date,
		search,
	},
});