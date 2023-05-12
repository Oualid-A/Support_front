import { Component } from '@angular/core';
import { AuthenticateService } from 'src/app/service/authenticate/authenticate.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  user = {
    email: '',
    motDePasse: ''
  };
  constructor(private loginService: AuthenticateService) { }
  
  login() {
    console.log(this.user);

    this.loginService.login(this.user).subscribe(
      response => {
        // Handle successful login, e.g., store the JWT token
        localStorage.setItem('token', response.token);
        // Redirect to the desired page
        alert("succes")
      },
      error => {
        alert("noooooooop")

        // Handle login error, e.g., display an error message
      }
    );  }
  
}
