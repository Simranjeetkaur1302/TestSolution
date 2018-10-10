import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import {User} from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDataService } from '../user-data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  user:  User ;
  addUserForm: FormGroup;
  id: number;

  constructor(private route: ActivatedRoute, private router: Router,private formBuilder: FormBuilder,
    public userDataService :UserDataService, private location: Location) { 

    this.route.params.subscribe(params => {
      this.addUserForm = this.formBuilder.group({
        id: ['', Validators.required],
        name: ['', Validators.required],
        date_of_birth: ['', Validators.required],
        email: ['', Validators.required],
        github_address: ['', Validators.required],
        twitter_address: ['', Validators.required],
        city_of_residence: ['', Validators.required],
        pincode: ['', Validators.required],

      });
    });
  }


  ngOnInit() {
  }
 /*  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  } */

  goBack(): void {
    this.location.back();
  }

  get f() { return this.addUserForm.controls; }


  onSubmit(){
   // this.submitted = true;
   let user = {
    id: this.f.id.value,
    name: this.f.name.value,
    date_of_birth: this.f.date_of_birth.value,
    email: this.f.email.value,
    github_address: this.f.github_address.value,
    twitter_address: this.f.twitter_address.value,
    city_of_residence: this.f.city_of_residence.value,
    pincode: this.f.pincode.value,

  };
    this.userDataService.addUser(user).subscribe( () => this.goBack() );
  }

}
