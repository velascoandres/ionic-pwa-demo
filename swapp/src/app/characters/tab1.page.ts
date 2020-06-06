import { Component } from '@angular/core';
import { CharacterRestService } from './services/rest/character.rest.service';
import { CharacterInterface } from './interfaces/character.interface';
import { PrincipalListPage } from '../lib/principal.list.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page extends PrincipalListPage<CharacterInterface>{
  constructor(
    private readonly _characterService: CharacterRestService,
  ) {
    super(
      _characterService,
    );
  }
}
