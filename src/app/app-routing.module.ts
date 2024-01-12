import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Components/index/index.component';
import { AddComponent } from './Components/add/add.component';
import { UpdateComponent } from './Components/update/update.component';
import { UsersComponent } from './Components/users/users.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';

// Asignación de rutas
const routes: Routes = [
  { path:'', redirectTo:'/index', pathMatch:'full' },
  { path:'index', component: IndexComponent},
  { path: 'users/all', component: UsersComponent},
  { path:'add', component: AddComponent },
  { path:'update/:id', component: UpdateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
