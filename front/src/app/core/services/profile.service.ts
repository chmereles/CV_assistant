import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { Observable } from 'rxjs';
import { Profile } from '../interfaces/profiles.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private api: ApiService) { }

}
