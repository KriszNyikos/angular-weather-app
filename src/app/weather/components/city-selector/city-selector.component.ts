import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { CitySelectorVM } from 'src/app/model/city-selector.component.vm';

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.scss'],
})
export class CitySelectorComponent implements OnInit, OnDestroy {
  @Input() cityList: CitySelectorVM | null = null;

  public cityNameControl = new FormControl();
  private _citySubscripion?: Subscription;
  @Output() cityNameChange = new EventEmitter<string>();
  @Output() cityNameSelected = new EventEmitter<string>();

  ngOnInit(): void {
    this._citySubscripion = this.cityNameControl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((query: string | null) => {
        if (query === null || query === '') {
          return;
        } else {
          this.cityNameChange.emit(query);
        }
      });
  }

  ngOnDestroy(): void {
    this._citySubscripion?.unsubscribe();
  }

  onClickCityNameHandler(coordinates: string) {
    this.cityNameControl.reset();
    this.cityNameSelected.emit(coordinates);
  }

  onEnterCityNameHandler() {
    this.cityNameSelected.emit(this.cityNameControl.value);
    this.cityNameControl.reset();
    this.cityList = null;
  }
}
