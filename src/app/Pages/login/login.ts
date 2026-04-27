import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  userName: string = '';
  password: string = '';
  role: string = '';

  constructor(private router: Router) {}

  onLogin() {

    if (!this.userName || !this.password || !this.role) {
      alert("Please fill all fields");
      return;
    }

    const validUsers: any = {
      admin: { user: "Admin", pass: "1234", route: "/admin" },
      engineer: { user: "Engineer", pass: "1234", route: "/site-engineer" },
      report: { user: "Report", pass: "1234", route: "/report-maker" }
    };

    const selected = validUsers[this.role];

    if (
      selected &&
      this.userName === selected.user &&
      this.password === selected.pass
    ) {

      localStorage.setItem("user", JSON.stringify({
        userName: this.userName,
        role: this.role
      }));

      this.router.navigateByUrl(selected.route);

    } else {
      alert("Invalid credentials");
    }
  }
}