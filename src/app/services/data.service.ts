import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  selectByDog(breed: any): Observable<any> {
    return this.http.get<any>(
      'https://dog.ceo/api/breed/' + breed + '/images/random/1'
    );
  }
  getListOfDogs() {
    return this.http.get('https://dog.ceo/api/breeds/list');
  }
}
