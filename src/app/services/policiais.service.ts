import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policiais } from '../models/policiais.model';

@Injectable({
  providedIn: 'root',
})
export class PoliciaisService {
  private apiURL = 'http://localhost:3000/api/policiais';

  constructor(private http: HttpClient) {}
  getPoliciais(): Observable<Policiais[]> {
    return this.http.get<Policiais[]>(this.apiURL);
  }

  getPoliciaisById(id: number): Observable<Policiais> {
    return this.http.get<Policiais>(`${this.apiURL}/${id}`);
  }
  createPolicial(policial: Policiais): Observable<Policiais> {
    return this.http.post<Policiais>(this.apiURL, policial);
  }
  updatePolicial(id: number, policial: Policiais): Observable<any> {
    return this.http.put<Policiais>(`${this.apiURL}/${id}`, policial);
  }
  deletePolicial(id: number): Observable<any> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
