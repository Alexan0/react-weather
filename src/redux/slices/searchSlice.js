import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	city: 'Москва',
};

export const searchSlice = createSlice({
	name: "Search",
	initialState,
	reducers: {
		searchCity(state, action) {
			state.city = action.payload;
		}
	}
});

export const { searchCity } = searchSlice.actions;
export default searchSlice.reducer;