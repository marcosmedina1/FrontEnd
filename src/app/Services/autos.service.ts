import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Automovil } from '../../assets/models';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private autosUrl = 'https://catalogo-autos.herokuapp.com/api/autos/limit/40';
  private SinLimiteUrl = 'https://catalogo-autos.herokuapp.com/api/autos';
  constructor(
    private http: HttpClient
  ) { }

  getAutos(): Observable<any> {
    return this.http.get<any>(this.SinLimiteUrl);
  }

  UpdateAutos(auto: Automovil): Observable<any> {
    return this.http.put<any>(`${this.SinLimiteUrl}/${auto._id}`, auto);
  }

  DeleteAutos(id: number) {
    const url = `${this.SinLimiteUrl}/${id}`;
    return this.http.delete(url);
  }

  AgregarAutos(auto: Automovil): Observable<any> {
    return this.http.post<any>(`${this.SinLimiteUrl}`, auto);
  }
}
