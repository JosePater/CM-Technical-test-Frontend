import { Component } from '@angular/core';
import { UsersService, User } from '../../SERVICES/users.service';
import { Router } from '@angular/router'; // Usado para update user


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  // Let
  ListarUsers?: User[];

  constructor(private UsersService: UsersService, private router:Router) { }

  ngOnInit(): void {
    this.listarUsers();
  }

  // Listar Usuarios
  listarUsers() {
    this.UsersService.getUsers().subscribe({
      next: res => {
        this.ListarUsers = <any> res;
        console.log('Lista de usuarios:', res);
      },
      error: err => console.log(err)
    })
  }

  // Eliminar usuario
  delete(id:number) {
    this.UsersService.deleteUser(id).subscribe({
      next: res => {
        this.listarUsers(); // Actualizar elementos
        console.log(res); // {status: 'Usuario Eliminado!'}
      },
      error: err => console.error('Error al eliminar usuario: ', err)
    });
  }

  // Modificar usuario
  update(id:number) {
    this.router.navigate(['/update/'+id]);
  }

}
