import { Component, OnInit } from '@angular/core';
import { WeatherComponentVM } from '../model/weather.component.vm';
import { WeatherComponentService } from './weather.component.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [WeatherComponentService]
})
export class WeatherComponent implements OnInit {
  public vm$: Observable<WeatherComponentVM>  = this.weatherComponentService.vm$ as Observable<WeatherComponentVM>;

  constructor(private readonly weatherComponentService: WeatherComponentService) { }

  ngOnInit(): void {
    this.weatherComponentService.startInterval()
  }
}
