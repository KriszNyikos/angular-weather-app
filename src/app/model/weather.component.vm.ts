import { CitySelectorVM } from "./city-selector.component.vm";
import { ExtraWeatherDataVM } from "./extra-weather.compoennt.vm";
import { ForecastVM } from "./forecast.component.vm";

export interface WeatherComponentVM{
    availableCities: CitySelectorVM,
    currentWeather: CitySelectorVM,
    extraWeatherData: ExtraWeatherDataVM,
    forecast: ForecastVM
}