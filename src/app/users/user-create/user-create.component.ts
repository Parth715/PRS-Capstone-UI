import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

    user: User = new User;
  constructor(private usersrv: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  add(): void {
    this.usersrv.Insert(this.user).subscribe({
      next: res => {
        console.log("created successfully")
        this.router.navigate(["/userlist"])},
      error: err => console.log(err)
    })
  }
}
