import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housinglocation';
import { HOUSING_LOCATION_LIST } from './home.mock';
import { HousingService } from '../housing-location.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  housingLocationList: HousingLocation[];

  // instead constructor(private housingService: HousingService)
  // private housingService: HousingService = inject(HousingService);

  constructor(private housingService: HousingService) {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}
