import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing-location.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  housingLocation: HousingLocation | undefined ;

  constructor(
    private activatedRoute: ActivatedRoute,
    private housingService: HousingService
  ) {
    const id = Number(this.activatedRoute.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(id);
  }
}
