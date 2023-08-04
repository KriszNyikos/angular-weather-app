import config from '../constants/config.json'
import { WeatherRequest } from '../enums/request-type.enum'



export  const createUrlForAvailableCities = (query: string): string => {
    return `${config.WEATHER_API_BASE_URL}${WeatherRequest.SEARCH}.json?key=${config.WEATHER_API_KEY}&q=${query}`
}

export  const createUrlForCurrentAndForecast = (query: string): string => {
    return `${config.WEATHER_API_BASE_URL}${WeatherRequest.FORECAST}.json?key=${config.WEATHER_API_KEY}&q=${query}&days=5` // after the weatherapi trial, it will be 3 days
}
