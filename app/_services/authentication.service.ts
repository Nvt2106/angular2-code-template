import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/toPromise';
 
@Injectable()
export class AuthenticationService {
    public token: string;
 
    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
 
    login(source, token): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('/app/heroes', JSON.stringify({ source: source, token: token }), options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                // let token = response.json() && response.json().token;
                // if (token) {
                //     // set token property
                //     this.token = token;
 
                //     // store username and jwt token in local storage to keep user logged in between page refreshes
                //     let username = response.json() && response.json().username;
                //     localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
 
                //     // return true to indicate successful login
                //     return true;
                // } else {
                //     // return false to indicate failed login
                //     return false;
                // }

                // TODO: for testing only
                localStorage.setItem('currentUser', JSON.stringify({ username: 'nvt2106', token: '123', first_name: 'Tuan', last_name: 'Nguyen' }));
                return true;
            });
    }
 
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}