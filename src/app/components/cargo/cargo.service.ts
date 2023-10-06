import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CargoInterface } from './interface/cargo.interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CargoService {

  BASE_URL: string = 'http://localhost:8080'
  //BASE_URL: string = 'https://ciie069back.onrender.com'

  constructor( private httpClient: HttpClient ) { }

  getAll(): Observable<CargoInterface[]> {
    return this.httpClient.get<CargoInterface[]>(`${this.BASE_URL}/cargo`);
  }

  getOneId(id: string): Observable<CargoInterface> {
    var cargo = this.httpClient.get<CargoInterface>(`${this.BASE_URL}/cargo/${id}`);
    console.log("cargo encotrado-> "+ cargo)
    return cargo
  }

  getOneClave(clave: string): Observable<CargoInterface> {
    var cargo = this.httpClient.get<CargoInterface>(`${this.BASE_URL}/cargo/${clave}`);
    console.log("cargo encotrado-> "+ cargo)
    return cargo
  }

  create(cargo: CargoInterface): Observable<CargoInterface> {
    return this.httpClient.post<CargoInterface>(`${this.BASE_URL}/cargo`, cargo);
  }

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.BASE_URL}/cargo/${id}`);
  }

  update(id: string, cargo: CargoInterface): Observable<CargoInterface> {
    return this.httpClient.put<CargoInterface>(`${this.BASE_URL}/cargo/${id}`, cargo);
  }
  
}
