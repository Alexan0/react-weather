import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

import { getCityFromLS } from '../../utils/getCityFromLS';

interface SearchSliceState {
	city: string;
}

const initialState: SearchSliceState = {
	city: getCityFromLS(),
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

export const selectCity = (state: RootState) => state.search;

export const { searchCity } = searchSlice.actions;
export default searchSlice.reducer;