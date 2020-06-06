import { Component } from '@angular/core';
import { PrincipalListPage } from '../lib/principal.list.page';
import { PlanetInterface } from './interfaces/planet.interface';
import { PlanetRestService } from './services/rest/planet.rest.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page extends PrincipalListPage<PlanetInterface>{
  constructor(
    private readonly _planetService: PlanetRestService,
  ) {
    super(
      _planetService,
    );
  }
}
