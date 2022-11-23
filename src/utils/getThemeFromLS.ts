export const getThemeFromLS = () => {
	const themeJson = localStorage.getItem('theme');
	return themeJson ? JSON.parse(themeJson) : 'white-theme'
	
}