import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CargoInterface } from './interface/cargo.interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CargoService {

  BASE_URL: string = 'http://localhost:8080'

  constructor( private httpClient: HttpClient ) { }

  get(): Observable<CargoInterface[]>  {
    return this.httpClient.get<CargoInterface[]>(`${this.BASE_URL}/cargo/todos`)
  }
}
