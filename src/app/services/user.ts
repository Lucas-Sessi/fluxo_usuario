import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private  http: HttpClient) {}

    url = `http://localhost:4000/user`;

    getUsers(): Observable<any> {
        return this.http.get(this.url);
    }

    getUserByName(username: string): Observable<any> {
        return this.http.get(`${this.url}/find-profile/${username}`);
    }
}