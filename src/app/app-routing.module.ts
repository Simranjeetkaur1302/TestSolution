import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDataComponent } from './edit-data/edit-data.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { AppComponent } from './app.component';
import { AddDataComponent } from './add-data/add-data.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 // { path: '', component : AppComponent, pathMatch: 'full' },
 { path: '', component : HomeComponent, pathMatch: 'full' },
  { path: 'editUser', component : EditDataComponent},
  { path : 'viewUser', component : ViewDataComponent},
  {path : 'addUser', component : AddDataComponent}
/*   { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent } */
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}