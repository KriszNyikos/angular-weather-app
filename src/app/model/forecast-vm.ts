export interface ForecastVm {
    days: ForecastDay[]
}

interface ForecastDay {
    date: string;
    hourForecast: ForecastHour[]
}

interface ForecastHour {
    time: string;
    tempCelsius: number;
    iconUrl: string;
    description: string;
}   