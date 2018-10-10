import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

	private serviceUrl = ' http://localhost:3000/users';
	
	

  constructor(private http: HttpClient ) { }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl)
      .pipe(
        tap(users => console.log('fetched users', users))
      
       // catchError(this.handleError('getHeroes', []))
      );
  }

  getUser(id: number): Observable<User> {
    const url = `${this.serviceUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ =>  console.log('edited user', id)),
    );
  }

  addUser (user: User): Observable<User> {
    return this.http.post<User>(this.serviceUrl, user, httpOptions).pipe(
      tap((user: User) => console.log(`added user w/ id=${user.id}`))
    );
  }


  

deleteUser (user: User | number): Observable<User> {
  const id = typeof user === 'number' ? user : user.id;
  const url = `${this.serviceUrl}/${id}`;

  return this.http.delete<User>(url, httpOptions).pipe(
    tap(_ => console.log('deleted user', user)),
  );
}

updateUser (user: User): Observable<any> {
  const id = typeof user === 'number' ? user : user.id;
  const url = `${this.serviceUrl}/${id}`;
  return this.http.put(url, user, httpOptions).pipe(
    tap(_ =>  console.log('updated user id',user.id)) ,
  );
}


}
