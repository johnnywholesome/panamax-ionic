import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { List } from '../model/list.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ListsDataService extends DefaultDataService<List> {

  constructor(http: HttpClient,httpUrlGenerator: HttpUrlGenerator) {
    super('List', http, httpUrlGenerator);
  }

  getAll(): Observable<List[]> {
    return this.http.get<List[]>(`${environment.api}/api/lists`);
  }
}
