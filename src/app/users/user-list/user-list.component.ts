import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = []

  constructor(private usersrv: UserService) { }

  ngOnInit(): void {
    this.usersrv.list().subscribe({
      next: res => {
        console.debug("Users:", res)
        this.users = res;
      },
      error: err => {
        console.error(err)
      }
    });
  }

}