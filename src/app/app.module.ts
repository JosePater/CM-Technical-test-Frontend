import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './Components/index/index.component';
import { AddComponent } from './Components/add/add.component';
import { UpdateComponent } from './Components/update/update.component';

import { HttpClientModule } from '@angular/common/http'; // Importar cliente http
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './Components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AddComponent,
    UpdateComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
