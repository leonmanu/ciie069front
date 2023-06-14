import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargoFormComponent } from './components/cargo/cargo-form/cargo-form.component';
import { CargoListComponent } from './components/cargo/cargo-list/cargo-list.component';

const routes: Routes = [

  {
    path: '',
    component: CargoListComponent
  },

  {
    path: 'cargo/alta',
    component: CargoFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
