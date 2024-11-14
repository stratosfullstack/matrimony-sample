import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  userDetails: any[] = [
    { user_name: "libinj", email_id: "libin@gmail.com", first_name: "Libin", last_name: "Jacob", gender: "Male", country: "Bahrain", password: "123", role: 0 },
    { user_name: "manuj", email_id: "manu@gmail.com", first_name: "Manu", last_name: "Joseph", gender: "Male", country: "England", password: "123", role: 1 },
    { user_name: "riyam", email_id: "riya@gmail.com", first_name: "Riya", last_name: "Mathew", gender: "Male", country: "Kuwait", password: "123", role: 1 },
    { user_name: "ninua", email_id: "ninu@gmail.com", first_name: "Ninu", last_name: "Abraham", gender: "Male", country: "India", password: "100", role: 1 },
    { user_name: "jeenas", email_id: "jeena@gmail.com", first_name: "Jeena", last_name: "Reji", gender: "Male", country: "India", password: "123", role: 1 }
  ];

  register(
    firstName: any,
    lastName: any,
    gender: any,
    countryName: any,
    emailId: any,
    userName: any,
    password: any
  ) {
    // Check if email already exists
    const existingUser = this.userDetails.find((user) => user.email_id === emailId);

    if (existingUser) {
      return false;
    } else {
      // Add new user
      this.userDetails.push({
        user_name: userName,
        email_id: emailId,
        first_name: firstName,
        last_name: lastName,
        gender: gender,
        country: countryName,
        password: password,
        role: 1, // Default role
      });
      console.log(this.userDetails);

      return true;
    }
  }

  login(emailId: any, password: any) {
    const user = this.userDetails.find(user => user.email_id === emailId);
    if (user) {
      if (user.password === password) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
