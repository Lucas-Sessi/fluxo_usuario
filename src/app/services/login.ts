import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private  http: HttpClient) {}

    url = `http://localhost:4000/login`;

    login(email: string, password: string): Observable<any> {
        return this.http.post(this.url, {email, password});
    }
}