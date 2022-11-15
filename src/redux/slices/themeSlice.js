import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	darkTheme: localStorage.getItem('theme'),
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		changeTheme(state, action) {
			state.darkTheme = action.payload;
		}
	}
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;