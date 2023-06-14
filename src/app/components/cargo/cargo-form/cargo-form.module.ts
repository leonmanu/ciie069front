import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';





@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatFormFieldModule, ReactiveFormsModule
  ],
  exports: [
    MatFormFieldModule, ReactiveFormsModule,MatInputModule
  ]
})
export class CargoFormModule { }
