import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['../user-create/user-create.component.css']
})
export class UserEditComponent implements OnInit {

  user!: User
  constructor(private route: ActivatedRoute, private usersrv: UserService, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"]
    this.usersrv.GetByPk(id).subscribe({
      next: res => {
        console.log(res)
        this.user=res;
      },
      error: err => {
        console.log(err);
      }
    })
  }
  save(): void{
    let id = this.route.snapshot.params["id"]
    this.usersrv.Update(this.user, id).subscribe({
      next: res => {
        console.log("Changed successfully")
        this.router.navigate(["/userlist"])},
      error: err => console.log(err)
    })
  }

}
