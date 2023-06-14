import { Component, OnInit } from '@angular/core';
import { CargoService } from '../cargo.service';
import { CargoInterface } from '../interface/cargo.interface';

@Component({
  selector: 'app-cargo-list',
  templateUrl: './cargo-list.component.html',
  styleUrls: ['./cargo-list.component.css']
})
export class CargoListComponent implements OnInit {

  cargos: CargoInterface[] = []

  constructor( private cargoService: CargoService ) {}

  ngOnInit(): void {
    this.getCargo()
  }

  getCargo(){
    this.cargoService.get()
      .subscribe(
        {
          next: res => 
            {
              this.cargos = res,
              console.log("Cargos: "+res)
            },
          error: err => 
          {
            console.log(err)
          }
        }
      )
  }
}
