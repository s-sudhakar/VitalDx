import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = { username: '', password: '' };
  loginUser: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  login(formData: any) {
    this.loginUser = formData.username;
    if (this.loginUser == 'Client') {
      this.router.navigate(['client/published']);
    } else if (this.loginUser == 'Admin') {
      this.router.navigate(['admin/admin-config']);
    } else {
      alert('User not valid !');
    }
  }

}
