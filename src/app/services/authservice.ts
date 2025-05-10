import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';


interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:7243/api/';

  constructor(private http: HttpClient) {}

  login(user: any): Observable<LoginResponse> {
    const serviceUrl = this.baseUrl + `/auth/login`
    return this.http.post<LoginResponse>(serviceUrl, user)
    // .pipe(
    //   map((e: any) => e.data)),
    //   catchError((e: Response) => throwError(e));
  }

  register(username: string, email: string, password: string, role: string){
    return this.http.post(`${this.baseUrl}/User/register`, { username, email, password, role })
  }
  
}