import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-get-demo',
  templateUrl: './get-demo.component.html',
  styleUrls: ['./get-demo.component.css']
})
export class GetDemoComponent implements OnInit {
  private user: User;
  private notFound: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  getUser(id: number) {
    this.notFound = false;
    this.user = null;

    this.userService.getUser(id).subscribe(resp => {
      console.log(resp);
      this.user = resp;
    }, error => {
      console.log('error');
      this.notFound = true;
    });

  }

}
