import { Component } from '@angular/core';
import { WeatherComponentVM } from '../model/weather.component.vm';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  public vm?: WeatherComponentVM
}
