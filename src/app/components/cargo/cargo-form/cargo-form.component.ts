import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CargoService } from '../cargo.service';
import { CargoInterface } from '../interface/cargo.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cargo-form',
  templateUrl: './cargo-form.component.html',
  styleUrls: ['./cargo-form.component.css']
})
export class CargoFormComponent implements OnInit {
  cargoForm!: FormGroup; // Agregar el signo de exclamación para indicar que será inicializado más adelante
  cargoInterface!: CargoInterface;
  modoVisualizacion = false; // Debe definirse y configurarse aquí
  
  constructor(
    private formBuilder: FormBuilder,
    private cargoService: CargoService,
    private route: ActivatedRoute // Inyecta ActivatedRoute
    
  ) {

    this.cargoForm = this.formBuilder.group({
      // Define aquí tus formControls
      cupof: ['', Validators.required],
      clave: ['', Validators.required],
      cargaHoraria: ['', Validators.required],
      designacion: [''],
      createAt: ['']
    });
   }

  ngOnInit(): void {
    
    this.getOneClave()
  }

  getOneClave() {
    // Obtener el valor del parámetro 'clave' de la URL
    const params = this.route.snapshot.params;
    
    if (params['clave']) {
      // Estás en modo de edición, obtén los detalles del cargo y muestra el formulario con los detalles
      this.cargoService.getOneId(params['clave'])
      .subscribe(
        {
          next: (response:any) => {
            const cargo: CargoInterface = response.cargoEncontrado
            console.log("respuesta: "+ cargo.cupof)
            this.cargoForm = this.formBuilder.group({
              cupof: [cargo.cupof, Validators.required],
              clave: [cargo.clave, Validators.required],
              cargaHoraria: [cargo.cargaHoraria, Validators.required],
              designacion: [cargo.designacion],
              createAt: [cargo.createAt]
            });
            console.log("CARGO: "+cargo.clave)
            // Desactiva los campos para modo de visualización
            this.cargoForm.disable();
            this.modoVisualizacion = true;
          },
        error: error => {
          console.error('Error al obtener detalles del cargo:', error);
        }
        
      });
    }
  }

  submitForm() {
    if (this.cargoForm.valid) {
      
      this.cargoInterface = this.cargoForm.value
      console.log("CARGO ==> ", this.cargoInterface)
      alert(this.cargoInterface.designacion)
      this.cargoService.create(this.cargoInterface).subscribe({
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
