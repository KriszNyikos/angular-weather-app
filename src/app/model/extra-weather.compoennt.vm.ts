export interface ExtraWeatherDataVM {
    humidiy: number,
    pressureMb: number,
    windSpeedKph: number,
    windDirection: string,
    cloudCover: number,
    feelsLikeC: number,
    uvIndex: number,
}

export function mapCurrentWeatherApiRequestToExtraWeatherDataVM(
    currentWeatherData: any
  ): ExtraWeatherDataVM {
    return {
      humidiy: currentWeatherData.humidity,
      pressureMb: currentWeatherData.pressure_mb,
      windSpeedKph: currentWeatherData.wind_kph,
      windDirection: currentWeatherData.wind_dir,
      cloudCover: currentWeatherData.cloud,
      feelsLikeC: currentWeatherData.feelslike_c,
      uvIndex: currentWeatherData.uv,
    };
  }
