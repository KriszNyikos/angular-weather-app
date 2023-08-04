import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ExtraWeatherComponent } from './components/extra-weather/extra-weather.component';
import { ForecastComponent } from './components/forecast/forecast.component';


@NgModule({
  declarations: [WeatherComponent, CurrentWeatherComponent, ExtraWeatherComponent, ForecastComponent],
  exports:[WeatherComponent],
  imports: [
    CommonModule
  ],

})
export class WeatherModule { }
