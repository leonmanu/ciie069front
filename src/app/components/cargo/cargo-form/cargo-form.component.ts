import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CargoService } from '../cargo.service';
import { CargoInterface } from '../interface/cargo.interface';


@Component({
  selector: 'app-cargo-form',
  templateUrl: './cargo-form.component.html',
  styleUrls: ['./cargo-form.component.css']
})
export class CargoFormComponent implements OnInit {
  cargoForm!: FormGroup; // Agregar el signo de exclamación para indicar que será inicializado más adelante
  cargoInterface!: CargoInterface;
  constructor(
    private formBuilder: FormBuilder,
    private cargoService: CargoService,
  ) { }

  ngOnInit() {
    this.cargoForm = this.formBuilder.group({
      cupof: ['', Validators.required],
      clave: ['', Validators.required],
      cargaHoraria: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.cargoForm.valid) {
      
      this.cargoInterface = this.cargoForm.value
      console.log("CARGO ==> ", this.cargoInterface)
      alert(this.cargoInterface.designacion)
      this.cargoService.post(this.cargoInterface).subscribe({
        next: response => {
          // Manejar la respuesta del servidor
          console.log('Respuesta del servidor:', response);
          alert(response.designacion)
        },
        error: error => {
          // Manejar el error en caso de que ocurra
          console.error('Error en la solicitud:', error);
          alert('error: '+ error)
        },
        complete: () => {
          // Lógica a ejecutar cuando la solicitud se completa
          alert("se completó")
        }
      })
    }
  }
}
