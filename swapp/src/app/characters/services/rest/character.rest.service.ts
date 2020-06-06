import { CharacterInterface } from '../../interfaces/character.interface';
import { PrincipalRestService } from 'src/app/lib/principal.rest.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CharacterRestService extends PrincipalRestService<CharacterInterface>{
    constructor(
      private readonly _httpClient: HttpClient,
    ) {
        super(
            _httpClient,
            'api/people/',
        );
    }
}