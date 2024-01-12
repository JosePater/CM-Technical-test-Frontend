import { Component, OnInit } from '@angular/core';
import { User, UsersService } from '../../SERVICES/users.service';
import { Router, ActivatedRoute } from '@angular/router'; // ActivatedRoute: recupera la id para update


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
    user: any = {
      _id: 0,
      name: '',
      last_name: '',
      pass: '',
      _date: new Date()
    };

  constructor(private UserService: UsersService,
              private router:Router,
              private activeRouter:ActivatedRoute) {}


  ngOnInit(): void {
    const id_obtenida = <number> this.activeRouter.snapshot.params['id'];
    console.log("ID obtenida: "+id_obtenida);

    if (typeof this.user._id === 'number') {
        this.UserService.getUser(id_obtenida).subscribe({
        next: res => {
          this.user = res; // respuesta dentro de []
          this.user = this.user[0]; // para acceder a la respuesta
          console.log("res: ", this.user);
        },
        error: err => console.log(err)
      });
    }
  }

  update() {
    // Manejo del tipo de dato int
    if (typeof this.user._id === 'number') {
      this.UserService.updateUser(this.user._id, this.user).subscribe({
        next: res => {
          console.log("Update: ",res);
        },
        error: err => console.log('Error: ->',err)
        });
    }
    this.router.navigate(['/index']); // Vuelve a la ruta de inicio
  }

}

