import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

type WheatherDateCity = {
	id: number;
	name: string;
	coord: {
		lat: number;
		lon: number;
	}
	country: string;
	population: number;
	timezone: number;
	sunrise: number;
	sunset: number;
}

type WheaterDateList = {
	dt: number;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		sea_level: number;
		grnd_level: number;
		humidity: number;
		temp_kf: number;
	}
	weather: [{
		id: number;
		main: string;
		description: string;
		icon: string;
	}]
	clouds: {
		all: number;
	}
	wind: {
		speed: number;
		deg: number;
		gust: number
	}
	visibility: number;
	pop: number;
	show: {
		'3h': number;
	}
	sys: {
		pod: string;
	}
	dt_txt: string;
}

enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

interface WheaterDateState {
	wheaterDate: {
		cod: string;
		message: number;
		cnt: number;
		list: WheaterDateList[];
		city: WheatherDateCity;
	}
	status: Status;
}

export const fetchDays = createAsyncThunk(
	'day/fetchDaysStatus',
	async (params: Record<string, string>) => {
		const { city, apiKey } = params;
		const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=${apiKey}`);
		return data;
	}
)

const initialState: WheaterDateState = {
	wheaterDate: {
		cod: '',
		message: 0,
		cnt: 0,
		list: [{
			dt: 0,
			main: {
				temp: 0,
				feels_like: 0,
				temp_min: 0,
				temp_max: 0,
				pressure: 0,
				sea_level: 0,
				grnd_level: 0,
				humidity: 0,
				temp_kf: 0,
			},
			weather: [{
				id: 0,
				main: '',
				description: '',
				icon: '',
			}],
			clouds: {
				all: 0,
			},
			wind: {
				speed: 0,
				deg: 0,
				gust: 0,
			},
			visibility: 0,
			pop: 0,
			show: {
				'3h': 0,
			},
			sys: {
				pod: '',
			},
			dt_txt: '',
		}],
		city: {
			id: 0,
			name: '',
			coord: {
				lat: 0,
				lon: 0,
			},
			country: '',
			population: 0,
			timezone: 0,
			sunrise: 0,
			sunset: 0,
		}
	},
	status: Status.LOADING,
};

export const daySlice = createSlice({
	name: "day",
	initialState,
	reducers: {
		addDate(state, action) {
			state.wheaterDate = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchDays.pending, (state) => {
			state.status = Status.LOADING;
			state.wheaterDate = {
				cod: '',
				message: 0,
				cnt: 0,
				list: [{
					dt: 0,
					main: {
						temp: 0,
						feels_like: 0,
						temp_min: 0,
						temp_max: 0,
						pressure: 0,
						sea_level: 0,
						grnd_level: 0,
						humidity: 0,
						temp_kf: 0,
					},
					weather: [{
						id: 0,
						main: '',
						description: '',
						icon: '',
					}],
					clouds: {
						all: 0,
					},
					wind: {
						speed: 0,
						deg: 0,
						gust: 0,
					},
					visibility: 0,
					pop: 0,
					show: {
						'3h': 0,
					},
					sys: {
						pod: '',
					},
					dt_txt: '',
				}],
				city: {
					id: 0,
					name: '',
					coord: {
						lat: 0,
						lon: 0,
					},
					country: '',
					population: 0,
					timezone: 0,
					sunrise: 0,
					sunset: 0,
				}
			}
		})
		builder.addCase(fetchDays.fulfilled, (state, action) => {
			state.wheaterDate = (action.payload);
			state.status = Status.SUCCESS;
		})
		builder.addCase(fetchDays.rejected, (state) => {
			state.status = Status.ERROR;
			state.wheaterDate = {
				cod: '',
				message: 0,
				cnt: 0,
				list: [{
					dt: 0,
					main: {
						temp: 0,
						feels_like: 0,
						temp_min: 0,
						temp_max: 0,
						pressure: 0,
						sea_level: 0,
						grnd_level: 0,
						humidity: 0,
						temp_kf: 0,
					},
					weather: [{
						id: 0,
						main: '',
						description: '',
						icon: '',
					}],
					clouds: {
						all: 0,
					},
					wind: {
						speed: 0,
						deg: 0,
						gust: 0,
					},
					visibility: 0,
					pop: 0,
					show: {
						'3h': 0,
					},
					sys: {
						pod: '',
					},
					dt_txt: '',
				}],
				city: {
					id: 0,
					name: '',
					coord: {
						lat: 0,
						lon: 0,
					},
					country: '',
					population: 0,
					timezone: 0,
					sunrise: 0,
					sunset: 0,
				}
			}
		})
	},
});

export const selectDay = (state: RootState) => state.wheaterDate;
export const selectStatus = (state: RootState) => state.wheaterDate.status;

export const { addDate } = daySlice.actions;
export default daySlice.reducer;