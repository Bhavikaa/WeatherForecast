import axios from "axios";
const API_KEY = "652525921f6db75c0602913d3f070f90";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "fetch_weather";

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    console.log('Request:',request);
    return {
        type:FETCH_WEATHER,
        payload: request
    }
}