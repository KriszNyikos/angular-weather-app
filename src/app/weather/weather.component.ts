import { Component, OnInit } from '@angular/core';
import { WeatherComponentVM } from '../model/weather.component.vm';
import { WeatherComponentService } from './weather.component.service';
import { Observable } from 'rxjs';
import { CitySelectorVM } from '../model/city-selector.component.vm';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [WeatherComponentService]
})
export class WeatherComponent implements OnInit {
  public vm$: Observable<WeatherComponentVM>  = this.weatherComponentService.vm$ as Observable<WeatherComponentVM>;
  public availableCities$ : Observable<CitySelectorVM> = this.weatherComponentService.availableCities$ as Observable<CitySelectorVM>

  constructor(private readonly weatherComponentService: WeatherComponentService) { }

  ngOnInit(): void {
    this.weatherComponentService.startInterval()
  }

  onCityNameChange(query: string){
    this.weatherComponentService.getAvailableCities(query)
  }

  onCityNameSelected(query: string){
    this.weatherComponentService.setWeatherToSelectedCity(query)
  }
}
