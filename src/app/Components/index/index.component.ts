import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../../SERVICES/users.service';
import { Router } from '@angular/router'; // Usado para update user

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit{
  // Let
  ListarUsers?: User[];

  constructor(private UsersService: UsersService, private router:Router) { }

  ngOnInit(): void {
    this.listarUsers();
  }

  // Listar Usuarios
  listarUsers() {
    this.UsersService.getUsers().subscribe(
      res => {
        console.log(res);
        this.ListarUsers = <any> res;
      },
      err => console.log(err)
    )
  }

  // Eliminar usuario
  delete(id:number) {
    this.UsersService.deleteUser(id).subscribe( 
      res => {
        console.log("Usuario Eliminado");
        this.listarUsers(); // Actualizar elementos    
    },
    err => console.log(err)
    );
  }

  // Modificar usuario
  update(id:number) {
    this.router.navigate(['/update/'+id]);
  }

}
