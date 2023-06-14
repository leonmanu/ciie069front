import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cargo-form',
  templateUrl: './cargo-form.component.html',
  styleUrls: ['./cargo-form.component.css']
})
export class CargoFormComponent implements OnInit {
  cargoForm!: FormGroup; // Agregar el signo de exclamación para indicar que será inicializado más adelante

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cargoForm = this.formBuilder.group({
      cupof: ['', Validators.required],
      clave: ['', Validators.required],
      rol: ['', Validators.required],
      area: ['', Validators.required],
      cargaHoraria: ['', Validators.required],
      institucion: ['', Validators.required],
      designacion: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.cargoForm.valid) {
      // Aquí puedes implementar la lógica para guardar los datos en la base de datos
    }
  }
}
