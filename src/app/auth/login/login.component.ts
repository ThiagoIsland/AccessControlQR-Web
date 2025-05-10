import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authservice';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  user: any = {};
  returnedToken: any; 

  constructor(
    public authService: AuthService
  ){}

  ngOnInit(): void {
    
  }
  submitLogin(value: any){

    const user: User = {
      Username: value.Username,
      Password: value.Password
    }

    
  this.authService.login(user).subscribe( 
    () => {
    console.log(user)
  })
  }
}
