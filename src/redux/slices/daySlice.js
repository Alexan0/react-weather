import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	date: {}
};

export const dateSlice = createSlice({
	name: "date",
	initialState,
	reducers: {
		addDate(state, action) {
			state.date = action.payload;
		}
	}
});

export const { addDate } = dateSlice.actions;
export default dateSlice.reducer;