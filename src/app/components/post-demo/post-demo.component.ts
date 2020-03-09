import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-demo',
  templateUrl: './post-demo.component.html',
  styleUrls: ['./post-demo.component.css']
})
export class PostDemoComponent implements OnInit {
  model: User = { id: 0, name: '', username: '' };

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {    
    this.userService.saveUser(this.model).subscribe(resp => {
      console.log(resp);
    }, error => {
      console.log(error);
    });
  }



}
