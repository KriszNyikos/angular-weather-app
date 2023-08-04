import { CitySelectorVM } from "./city-selector.component.vm";
import { CurrentWeatherVM, mapCurrentWeatherApiRequestToCurrentWeatherComponentVM } from "./current-weather.component.vm";
import { ExtraWeatherDataVM, mapCurrentWeatherApiRequestToExtraWeatherDataVM } from "./extra-weather.compoennt.vm";
import { ForecastVM, mapForecastApiRequestToForecastVM } from "./forecast.component.vm";

export interface WeatherComponentVM{
    currentWeather: CurrentWeatherVM,
    extraWeatherData: ExtraWeatherDataVM,
    forecast: ForecastVM
}

export function mapFullForecastApiRequestToWeatherComponentVM(
    apiresponse: any
  ): WeatherComponentVM {
    const { current, location, forecast } = apiresponse;
    return {
      currentWeather:
        mapCurrentWeatherApiRequestToCurrentWeatherComponentVM(
          current,
          location
        ),
      extraWeatherData:
        mapCurrentWeatherApiRequestToExtraWeatherDataVM(current),
      forecast: mapForecastApiRequestToForecastVM(forecast),
    };
  }