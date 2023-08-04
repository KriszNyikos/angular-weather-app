import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';


@NgModule({
  declarations: [WeatherComponent],
  exports:[WeatherComponent],
  imports: [
    CommonModule
  ],

})
export class WeatherModule { }
