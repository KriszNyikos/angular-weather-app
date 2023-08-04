export interface CurrentWeatherVM{
    cityName: string;
    temperatureCelsius: number;
    iconUrl: string,
    description: string;
}

export function mapCurrentWeatherApiRequestToCurrentWeatherComponentVM(
    currentWeatherData: any,
    location: any
  ): CurrentWeatherVM {
    return {
      cityName: location.name,
      temperatureCelsius: currentWeatherData.temp_c,
      iconUrl: `http://${currentWeatherData.condition.icon}`,
      description: currentWeatherData.condition.text,
    };
  }
