import { Injectable } from '@angular/core';
import { WeahterDataService } from '../services/weather-data.service';
import {
  WeatherComponentVM,
  mapFullForecastApiRequestToWeatherComponentVM,
} from '../model/weather.component.vm';
import {
  BehaviorSubject,
  Subject,
  Subscription,
  combineLatest,
  interval,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import {
  CitySelectorVM,
  mapWeatherApiCitiesToCitySelectorVM,
} from '../model/city-selector.component.vm';

@Injectable()
export class WeatherComponentService {
  constructor(public readonly weahterDataService: WeahterDataService) {}
  public vm$: Subject<WeatherComponentVM> = new Subject();
  public selectedNameOrCoordinates$: Subject<string> = new BehaviorSubject(
    'Zurich'
  ); // The query could be a city name like London, and coordinates in string like 48.8567,2.3508
  public availableCities$: Subject<CitySelectorVM | null> = new Subject();
  private weatherSubscription?: Subscription;

  public startInterval(): void {
    this.weatherSubscription = combineLatest([
      interval(60000).pipe(startWith(0)), 
      this.selectedNameOrCoordinates$,
    ])
      .pipe(
        switchMap(([, selectedNameOrCoordinates]) =>
          this.weahterDataService.getCurrentWeatherDataAndForecast(
            selectedNameOrCoordinates
          )
        )
      )
      .subscribe((data) => {
        this.vm$.next(mapFullForecastApiRequestToWeatherComponentVM(data));
      });
  }

  public getAvailableCities(query: string): void {
    if (query === '') {
      this.availableCities$.next(null);
    } else {
      this.weahterDataService
        .getAvailableCities(query)
        .subscribe((response) => {
          this.availableCities$.next(
            mapWeatherApiCitiesToCitySelectorVM(response)
          );
        });
    }
  }

  public setWeatherToSelectedCity(query: string): void {
    this.resetAvailableCities();
    this.selectedNameOrCoordinates$.next(query);
  }

  public resetAvailableCities(): void {
    this.availableCities$.next(null);
  }
}
