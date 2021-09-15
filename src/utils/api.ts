import axios from "axios"

const BASE_URL = 'http://127.0.0.1:8888'

export type iToDoList = {
	task: string;
	detail: string;
	index?: number;
	category: string;
	isDone?: boolean;
	id?: string;
}
export const apiGetToDoList = () => {
	return axios.get<iToDoList[]>(`${BASE_URL}/to-do`)
}

export const apiAddToDoList = (data: iToDoList) => {
	return axios.post<iToDoList[]>(`${BASE_URL}/to-do`, data)
}

export const apiEditToDoList = (data: iToDoList) => {
	return axios.put<iToDoList[]>(`${BASE_URL}/to-do`, data)
}

export const apiDeleteToDoList = (id: string) => {
	return axios.delete<iToDoList[]>(`${BASE_URL}/to-do`, {
		data: { id }
	})
}

export type iCategory = {
	label: string;
	value?: string;
}
export const apiGetCategory = () => {
	return axios.get<iCategory[]>(`${BASE_URL}/category`)
}

export const apiAddCategory = (data: iCategory) => {
	return axios.post<iCategory[]>(`${BASE_URL}/category`, data)
}

export const apiEditCategory = (data: iCategory) => {
	return axios.put<iCategory[]>(`${BASE_URL}/category`, data)
}

export const apiDeleteCategory = (id: string) => {
	return axios.delete<iCategory[]>(`${BASE_URL}/category`, {
		data: { id }
	})
}

export const apiSortToDoList = (data: MyObject<number>) => {
	return axios.post<iToDoList[]>(`${BASE_URL}/sort`, data)
}

export const getWeatherData = () => {
	const url = 'http://api.weatherapi.com/v1/forecast.json?key=2f262beb88c44bb5be2161605211009&q=Jakarta&days=1&aqi=yes&alerts=yes'
	return axios.get<WeatherData>(url)
}

export interface WeatherData {
	location: Location;
	current: Current;
	forecast: Forecast;
	alerts: Alerts;
}

interface Alerts {
	alert: any[];
}

interface Forecast {
	forecastday: Forecastday[];
}

interface Forecastday {
	date: string;
	date_epoch: number;
	day: Day;
	astro: Astro;
	hour: Hour[];
}

interface Hour {
	time_epoch: number;
	time: string;
	temp_c: number;
	temp_f: number;
	is_day: number;
	condition: Condition;
	wind_mph: number;
	wind_kph: number;
	wind_degree: number;
	wind_dir: string;
	pressure_mb: number;
	pressure_in: number;
	precip_mm: number;
	precip_in: number;
	humidity: number;
	cloud: number;
	feelslike_c: number;
	feelslike_f: number;
	windchill_c: number;
	windchill_f: number;
	heatindex_c: number;
	heatindex_f: number;
	dewpoint_c: number;
	dewpoint_f: number;
	will_it_rain: number;
	chance_of_rain: number;
	will_it_snow: number;
	chance_of_snow: number;
	vis_km: number;
	vis_miles: number;
	gust_mph: number;
	gust_kph: number;
	uv: number;
}

interface Astro {
	sunrise: string;
	sunset: string;
	moonrise: string;
	moonset: string;
	moon_phase: string;
	moon_illumination: string;
}

interface Day {
	maxtemp_c: number;
	maxtemp_f: number;
	mintemp_c: number;
	mintemp_f: number;
	avgtemp_c: number;
	avgtemp_f: number;
	maxwind_mph: number;
	maxwind_kph: number;
	totalprecip_mm: number;
	totalprecip_in: number;
	avgvis_km: number;
	avgvis_miles: number;
	avghumidity: number;
	daily_will_it_rain: number;
	daily_chance_of_rain: number;
	daily_will_it_snow: number;
	daily_chance_of_snow: number;
	condition: Condition;
	uv: number;
}

interface Current {
	last_updated_epoch: number;
	last_updated: string;
	temp_c: number;
	temp_f: number;
	is_day: number;
	condition: Condition;
	wind_mph: number;
	wind_kph: number;
	wind_degree: number;
	wind_dir: string;
	pressure_mb: number;
	pressure_in: number;
	precip_mm: number;
	precip_in: number;
	humidity: number;
	cloud: number;
	feelslike_c: number;
	feelslike_f: number;
	vis_km: number;
	vis_miles: number;
	uv: number;
	gust_mph: number;
	gust_kph: number;
	air_quality: Airquality;
}

interface Airquality {
	co: number;
	no2: number;
	o3: number;
	so2: number;
	pm2_5: number;
	pm10: number;
	'us-epa-index': number;
	'gb-defra-index': number;
}

interface Condition {
	text: string;
	icon: string;
	code: number;
}

interface Location {
	name: string;
	region: string;
	country: string;
	lat: number;
	lon: number;
	tz_id: string;
	localtime_epoch: number;
	localtime: string;
}