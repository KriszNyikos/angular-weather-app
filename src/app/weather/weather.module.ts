import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ExtraWeatherComponent } from './components/extra-weather/extra-weather.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { CitySelectorComponent } from './components/city-selector/city-selector.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [WeatherComponent, CurrentWeatherComponent, ExtraWeatherComponent, ForecastComponent, CitySelectorComponent],
  exports:[WeatherComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

})
export class WeatherModule { }
