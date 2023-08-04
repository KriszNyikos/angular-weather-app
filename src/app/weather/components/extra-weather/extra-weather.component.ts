import { Component, Input } from '@angular/core';
import { ExtraWeatherDataVm } from 'src/app/model/extra-weather-vm';

@Component({
  selector: 'app-extra-weather',
  templateUrl: './extra-weather.component.html',
  styleUrls: ['./extra-weather.component.scss']
})
export class ExtraWeatherComponent {
  @Input() vm: ExtraWeatherDataVm = {
    humidiy: 77,
    pressureMb: 1017.0,
    windSpeedKph: 14,
    windDirection: "NNW",
    cloudCover: 19.1,
    feelsLikeC: 17.0,
    uvIndex: 4.0,
  }
}
