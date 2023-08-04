import { Component, Input } from '@angular/core';
import { ForecastVM } from 'src/app/model/forecast.component.vm';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent {
  @Input() public vm: ForecastVM = {
    days: [
      {
        date: '2023-08-04',
        hourForecast: [
          {
            time: '22:00',
            tempCelsius: 16,
            iconUrl: "http://cdn.weatherapi.com/weather/64x64/day/116.png",
            description: "Partly cloudy"
          },
          {
            time: '23:00',
            tempCelsius: 16,
            iconUrl:"http://cdn.weatherapi.com/weather/64x64/day/116.png",
            description: "Partly cloudy"
          },
        ],
      },
      {
        date: '2023-08-05',
        hourForecast: [
          {
            time: '22:00',
            tempCelsius: 16,
            iconUrl: "http://cdn.weatherapi.com/weather/64x64/day/116.png",
            description: "Partly cloudy"
          },
          {
            time: '23:00',
            tempCelsius: 16,
            iconUrl: "http://cdn.weatherapi.com/weather/64x64/day/116.png",
            description: "Partly cloudy"
          },
        ],
      },
    ],
  };
}
