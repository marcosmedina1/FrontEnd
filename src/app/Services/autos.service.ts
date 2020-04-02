import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Automovil } from '../../assets/models';
import { MessageService } from './message.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private autosUrl = 'https://catalogo-autos.herokuapp.com/api/autos/limit/40';
  private SinLimiteUrl = 'https://catalogo-autos.herokuapp.com/api/autos';
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getAutos(): Observable<any> {
    return this.http.get<any>(this.SinLimiteUrl).pipe(
      catchError(this.handelError<any>('getAutos')),
      tap(() => this.messageService.add('Productos Obtenidos') )
    );
  }

  UpdateAutos(auto: Automovil): Observable<any> {
    return this.http.put<any>(`${this.SinLimiteUrl}/${auto._id}`, auto).pipe(
      catchError(this.handelError<any>('UpdateAutos')),
      tap((result) => {
        this.messageService.add(`Auto modificado con el Id: ${result.data._id}`);
      })
    );
  }

  DeleteAutos(id: number) {
    const url = `${this.SinLimiteUrl}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handelError<any>('DeleteAutos')),
      tap(() => this.messageService.add('Auto Eliminado'))
    );
  }

  AgregarAutos(auto: Automovil): Observable<any> {
    return this.http.post<any>(`${this.SinLimiteUrl}`, auto).pipe(
      catchError(this.handelError<any>('AgregarAutos')),
      tap((result) => {
        this.messageService.add(`Auto Agregado con Id: ${result.data._id}`);
      })
    );
  }

  private handelError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      this.messageService.add(`${operation} fallo: ${error.message}`);
      return of(result as T);
    };
  }
}
