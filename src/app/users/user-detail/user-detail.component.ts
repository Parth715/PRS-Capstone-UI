import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user!: User;
  constructor(private route:ActivatedRoute, private usersrv: UserService) { }

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
  del(): void{
    let user = this.route.snapshot.params["id"]
    this.usersrv.Delete(user)
    
  }

}

