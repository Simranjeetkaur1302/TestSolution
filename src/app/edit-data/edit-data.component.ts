import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import {User} from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDataService } from '../user-data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {

  user:  User ;
  editUserForm: FormGroup;
  id: number;

  constructor(private route: ActivatedRoute, private router: Router,private formBuilder: FormBuilder,
    public userDataService :UserDataService, private location: Location) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.editUserForm = this.formBuilder.group({
        id: ['', Validators.required],
        name: ['', Validators.required],
        date_of_birth: ['', Validators.required],
        email: ['', Validators.required],
        github_address: ['', Validators.required],
        twitter_address: ['', Validators.required],
        city_of_residence: ['', Validators.required],
        pincode: ['', Validators.required],

      });
      this.init();
    });
  }

  init() {
    this.userDataService.getUser(this.id)
      .subscribe(data => {
        console.log("data received for edit:-2:", data);
        if (null != data) {
          this.editUserForm.setValue({
            id: data.id,
            name: data.name,
            date_of_birth: data.date_of_birth,
            email: data.email,
            github_address: data.github_address,
            twitter_address: data.twitter_address,
            city_of_residence: data.city_of_residence,
            pincode: data.pincode,

          });
        this.user = data;
        }
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

  get f() { return this.editUserForm.controls; }


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
    this.userDataService.updateUser(user).subscribe( () => this.goBack() );
  }

}
