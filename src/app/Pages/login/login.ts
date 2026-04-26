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

    // SIMPLE DEMO AUTH (no backend)
    const validUsers: any = {
      admin: { user: "Admin", pass: "1234", route: "/admin" },
      engineer: { user: "Engineer", pass: "1234", route: "/engineer" },
      report: { user: "Report", pass: "1234", route: "/report" }
    };

    const selected = validUsers[this.role];

    if (
      selected &&
      this.userName === selected.user &&
      this.password === selected.pass
    ) {

      // store session
      localStorage.setItem("user", JSON.stringify({
        userName: this.userName,
        role: this.role
      }));

      alert("Login successful");

      // role-based navigation
      this.router.navigate([selected.route]);

    } else {
      alert("Invalid credentials");
    }
  }
}