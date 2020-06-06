import { Component } from '@angular/core';
import { VehicleInterface } from './interface/vehicle.interface';
import { PrincipalListPage } from '../lib/principal.list.page';
import { VehicleRestService } from './services/rest/vehicle.rest.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page extends PrincipalListPage<VehicleInterface>{
  constructor(
    private readonly _vehicleService: VehicleRestService,
  ) {
    super(
      _vehicleService,
    );
  }
}
