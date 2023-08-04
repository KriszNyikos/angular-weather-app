import { Component, Input } from '@angular/core';
import { CurrentWeatherVM } from 'src/app/model/current-weather-vm';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {
  @Input() public vm: CurrentWeatherVM = {
    cityName: 'London',
    temperatureCelsius: 30,
    iconUrl: "http://cdn.weatherapi.com/weather/64x64/day/116.png",
    description: "Partly cloudy"
  }
}
