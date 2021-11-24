import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  postId:any;
  user!: User;
  constructor(private usersrv: UserService) { }

  ngOnInit(): void {
  }
  add(): void{
    
    this.user = {
      id: 10,
      username: "abc123",
      password: "123abc",
      firstname: "abc",
      lastname: "123", 
      email: "", 
      phone:"", 
      isAdmin: false, 
      isReviewer: false
    }
    this.usersrv.Insert(this.user)
  }

}
