import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import changeTheme from "./slices/themeSlice";
import wheaterDate from "./slices/wheatherSlice";
import search from './slices/searchSlice';

export const store = configureStore({
	reducer: {
		changeTheme,
		wheaterDate,
		search,
	},
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()