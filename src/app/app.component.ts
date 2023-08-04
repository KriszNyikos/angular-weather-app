import { Component, OnInit } from '@angular/core';
import { WeahterDataService } from './services/weather-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WeahterDataService],
})
export class AppComponent implements OnInit {

  constructor(public readonly weather: WeahterDataService) {}

  ngOnInit(): void {
  }
}
