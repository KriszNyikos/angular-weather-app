import { Component, Input } from '@angular/core';
import { CurrentWeatherVM } from 'src/app/model/current-weather.component.vm';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {
  @Input() public vm?: CurrentWeatherVM
}
