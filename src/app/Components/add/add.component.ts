import { Component, OnInit } from '@angular/core';
import { User, UsersService } from '../../SERVICES/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  // let
  user: User = {
    _id: 0,
    name: '',
    last_name: '',
    pass: '',
    _date: new Date()
  };

  constructor(private UserService: UsersService, private router:Router) {}

  ngOnInit(): void {
    
  }

  add() {
    // delete this.user._id; // NA
    this.UserService.addUser(this.user).subscribe();
    this.router.navigate(['/index']); // Vuelve a la ruta de inicio
  }
}
