export const getCityFromLS = () => {
	const cityJson = localStorage.getItem('city');
	return cityJson ? JSON.parse(cityJson) : 'Москва'
}