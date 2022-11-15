import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: true,
};

export const loadingSlice = createSlice({
	name: "loading",
	initialState,
	reducers: {
		animLoading(state, action) {
			state.loading = action.payload;
		}
	}
});

export const { animLoading } = loadingSlice.actions;
export default loadingSlice.reducer;