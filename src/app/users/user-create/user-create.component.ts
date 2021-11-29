import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

    user: User = new User;
  constructor(private usersrv: UserService) { }

  ngOnInit(): void {
  }

  add(): void {
    this.usersrv.Insert(this.user).subscribe({
      next: res => console.log("created successfully"),
      error: err => console.log(err)
    })
  }
}
