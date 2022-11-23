import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

import { getThemeFromLS } from '../../utils/getThemeFromLS';

interface ThemeSliceState {
	theme: string;
}

const initialState: ThemeSliceState = {
	theme: getThemeFromLS(),
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		changeTheme(state, action: PayloadAction<string>) {
			state.theme = action.payload;
		}
	}
});

export const selectTheme = (state: RootState) => state.changeTheme;

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;