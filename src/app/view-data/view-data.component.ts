import { Component, OnInit } from '@angular/core';
import { UserDataService} from '../user-data.service'
import {User} from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {

  constructor(private userDataService: UserDataService,private router: Router) { }
  users : User[];

  ngOnInit() {
    this.getUsers();
  }


  getUsers(): void {
    this.userDataService.getUsers()
    .subscribe(users => { this.users = users;
    console.log("users",this.users) });
  }


  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.userDataService.deleteUser(user).subscribe();
  }

  add():void {
    this.router.navigate(['/addUser']);
  }

  edit(user : User) :void {

    this.router.navigate(['/editUser', user]);
   /*  this.users = this.users.filter(h => h !== user);
    this.userDataService.updateUser(user).subscribe(); */
  }
 // @ViewChild(MatPaginator) paginator: MatPaginator;
 // dataSource = new UserDataSource(this.coverity_xrService,this.paginator);
  
  
  
 // constructor(private userDataService: UserDataService) {
  // this.userDataService.getUser();
 // }



}

