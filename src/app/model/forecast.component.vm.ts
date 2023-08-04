export interface ForecastVM {
    days: ForecastDay[]
}

interface ForecastDay {
    date: string;
    maxTempCelsius: number;
    minTempCelsius: number;
    averageTempCelsius: number;
    iconUrl: string;
    description: string;
}

export function mapForecastApiRequestToForecastVM(forecast: any): ForecastVM {
    return {
      days: forecast.forecastday.map((dayData: any) => {
        const { day, date } = dayData;

        return {
          date: date,
          maxTempCelsius: day.maxtemp_c,
          minTempCelsius: day.mintemp_c,
          averageTempCelsius: day.avgtemp_c,
          iconUrl: day.condition.icon,
          description: day.condition.text,
        };
      }),
    };
  }