import { PlanetInterface } from '../../interfaces/planet.interface';
import { PrincipalRestService } from 'src/app/lib/principal.rest.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PlanetRestService extends PrincipalRestService<PlanetInterface>{
    constructor(
      private readonly _httpClient: HttpClient,
    ) {
        super(
            _httpClient,
            'api/planets/',
        );
    }
}