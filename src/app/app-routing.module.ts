import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Components/index/index.component';
import { AddComponent } from './Components/add/add.component';
import { UpdateComponent } from './Components/update/update.component';

// Asignación de rutas
const routes: Routes = [
  { path:'', redirectTo:'/index', pathMatch:'full' },
  { path:'index', component: IndexComponent},
  { path:'add', component: AddComponent },
  { path:'update/:id', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
