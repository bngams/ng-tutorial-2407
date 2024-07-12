import {Injectable} from '@angular/core';
import {HousingLocation} from './housinglocation';
import { HOUSING_LOCATION_LIST } from './home/home.mock';

@Injectable({
  providedIn: 'root',
})
export class HousingService {

  protected housingLocationList: HousingLocation[] = HOUSING_LOCATION_LIST;

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  }
}
