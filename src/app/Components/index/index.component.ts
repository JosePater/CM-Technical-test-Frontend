import { Component } from '@angular/core';
import { UsersService } from '../../SERVICES/users.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(private UsersService: UsersService) { }

  ngOnInit(): void {
    this.listarUsers();
  }

  // Listar Usuarios
  listarUsers() {
    this.UsersService.getUsers().subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }

}
