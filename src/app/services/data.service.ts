import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  register(
    firstName: any,
    lastName: any,
    emailId: any,
    phone: any,
    userName: any,
    password: any
  ) {
    const data = {
      firstname: firstName,
      lastname: lastName,
      email: emailId,
      phone,
      username: userName,
      password,
      role: 1
    }
    return this.http.post("http://localhost:3000/register", data)
  }

  login(
    emailId: any,
    password: any
  ) {
    const data = {
      email: emailId,
      password
    }
    return this.http.post("http://localhost:3000/login", data)
  }

  createProfile(formData: FormData) {
    return this.http.post("http://localhost:3000/create-profile", formData)
  }
}
