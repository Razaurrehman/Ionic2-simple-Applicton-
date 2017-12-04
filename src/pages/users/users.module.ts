import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersPage } from './users';
import {UserDetailsPage} from "../user-details/user-details";

@NgModule({
  declarations: [
    UsersPage
  ],
  imports: [
    IonicPageModule.forChild(UsersPage),
  ]
})
export class UsersPageModule {}
