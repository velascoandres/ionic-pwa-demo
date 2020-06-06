import { PrincipalRestService } from 'src/app/lib/principal.rest.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleInterface } from '../../interface/vehicle.interface';

@Injectable()
export class VehicleRestService extends PrincipalRestService<VehicleInterface>{
    constructor(
      private readonly _httpClient: HttpClient,
    ) {
        super(
            _httpClient,
            'api/vehicles/',
        );
    }
}