import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddDataComponent } from './add-data/add-data.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { ViewDataComponent } from './view-data/view-data.component';
import {UserDataService} from './user-data.service';

@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    DeleteDataComponent,
    EditDataComponent,
    ViewDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
