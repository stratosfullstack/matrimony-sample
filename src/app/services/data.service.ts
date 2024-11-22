import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  userDetails: any[] = [
    { user_name: "libinj", email_id: "libin@gmail.com", first_name: "Libin", last_name: "Jacob", gender: "Male", country: "Bahrain", password: "123", role: 0 },
    { user_name: "manuj", email_id: "manu@gmail.com", first_name: "Manu", last_name: "Joseph", gender: "Male", country: "England", password: "123", role: 1 },
    { user_name: "riyam", email_id: "riya@gmail.com", first_name: "Riya", last_name: "Mathew", gender: "Male", country: "Kuwait", password: "123", role: 1 },
    { user_name: "ninua", email_id: "ninu@gmail.com", first_name: "Ninu", last_name: "Abraham", gender: "Male", country: "India", password: "100", role: 1 },
    { user_name: "jeenas", email_id: "jeena@gmail.com", first_name: "Jeena", last_name: "Reji", gender: "Male", country: "India", password: "123", role: 1 }
  ];

  constructor(private http: HttpClient) { }

  register(
    firstName: any,
    lastName: any,
    gender: any,
    countryName: any,
    emailId: any,
    phone: any,
    userName: any,
    password: any
  ) {
    const data = {
      firstname: firstName,
      lastname: lastName,
      gender,
      country: countryName,
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
}
