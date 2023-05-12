import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private baseUrl = 'http://localhost:8080/auth/authenticate';
  constructor(private http: HttpClient) { }
  login(user: any) {
    return this.http.post<any>(`${this.baseUrl}`, user);
  }

}


 