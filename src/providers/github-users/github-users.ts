import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {User} from "../../models/user";


/*
  Generated class for the GithubUsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubUsersProvider {

  githubApiUrl = 'https://api.github.com';

  constructor(public http: HttpClient) {
    console.log('Hello GithubUsersProvider Provider');
  }

  // Load all github users
  load(): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/users`)
      .map(res => <User[]>res);
  }

}
