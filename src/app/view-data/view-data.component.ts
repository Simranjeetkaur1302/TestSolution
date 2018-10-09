import { Component, OnInit } from '@angular/core';
import { UserDataService} from '../user-data.service'

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {

  displayedColumns = ['name','date_of_birth','email','github_address','twitter_address','city_of_residence','pincode'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
  //  this.dataSource.paginator = this.paginator;
  }
 // @ViewChild(MatPaginator) paginator: MatPaginator;
 // dataSource = new UserDataSource(this.coverity_xrService,this.paginator);
  
  
  
 // constructor(private userDataService: UserDataService) {
  // this.userDataService.getUser();
 // }



}

export interface PeriodicElement {
  name: string;
  date_of_birth: string;
  email: string;
  github_address: string;
  twitter_address: string;
  city_of_residence: string,
  pincode: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'abc', date_of_birth: 'Hydrogen', email: 'abc', github_address: 'H', twitter_address : "H",city_of_residence:"H",pincode:"h"},
  {name: 'def', date_of_birth: 'Hydrogen', email: 'abc', github_address: 'H', twitter_address : "H",city_of_residence:"H",pincode:"h"},
];
