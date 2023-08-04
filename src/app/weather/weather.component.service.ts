import { Injectable } from '@angular/core';
import { WeahterDataService } from '../services/weather-data.service';
import {
  WeatherComponentVM,
  mapFullForecastApiRequestToWeatherComponentVM,
} from '../model/weather.component.vm';
import { Subject, interval, startWith, switchMap } from 'rxjs';
import { CurrentWeatherVM } from '../model/current-weather.component.vm';
import { ExtraWeatherDataVM } from '../model/extra-weather.compoennt.vm';
import { ForecastVM } from '../model/forecast.component.vm';

@Injectable()
export class WeatherComponentService {
  constructor(public readonly weahterDataService: WeahterDataService) {}
  public vm$: Subject<WeatherComponentVM> = new Subject();
  public selectedNameOrCoordinates: string = 'Budapest'; // The query could be a city name like London, and coordinates in string like 48.8567,2.3508

  public startInterval(): void {
    interval(10000)
      .pipe(
        startWith(0),
        switchMap(() =>
          this.weahterDataService.getCurrentWeatherDataAndForecast(
            this.selectedNameOrCoordinates
          )
        )
      )
      .subscribe((data) => {
        this.vm$.next(mapFullForecastApiRequestToWeatherComponentVM(data));
      });
  }
}
