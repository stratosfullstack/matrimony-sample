import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  register(gender: any, name: any, emailId: any, phone: any, userName: any, password: any) {
    const data = { gender, name, email: emailId, phone, username: userName, password, role: 1 }
    return this.http.post("http://localhost:3000/register", data)
  }

  login(emailId: any, password: any) {
    const data = { email: emailId, password }
    return this.http.post("http://localhost:3000/login", data)
  }

  forgotPassword(email: string) {
    return this.http.post("http://localhost:3000/forgot-password", { email });
  }

  resetPassword(token: string, newPassword: string) {
    return this.http.post("http://localhost:3000/reset-password", { token, newPassword });
  }

  createProfile(formData: FormData) {
    return this.http.post("http://localhost:3000/create-profile", formData)
  }

  getProfiles() {
    return this.http.get("http://localhost:3000/get-profiles").pipe(
      catchError((error: any) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getImageUrl(imagePath: string): string {
    return `http://localhost:3000/images/${imagePath.split('\\').pop()}`;
  }

  downloadPdf(pdfPath: string) {
    return this.http.get(`http://localhost:3000/download-pdf/${pdfPath}`, { responseType: 'blob' });
  }

  approveProfile(profileId: string): Observable<any> {
    return this.http.post('http://localhost:3000/approve-profile', { profileId });
  }

  disapproveProfile(profileId: string): Observable<any> {
    return this.http.post('http://localhost:3000/disapprove-profile', { profileId });
  }

  deleteProfile(profileId: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/delete-profile/${profileId}`);
  }

  getProfilesUser(gender: string) {
    return this.http.get(`http://localhost:3000/get-profiles-user?gender=${gender}`).pipe(
      catchError((error: any) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  viewProfile(profileId: string): Observable<any> {
    return this.http.get(`http://localhost:3000/get-profile/${profileId}`)
  }

  getProfileCount(): Observable<any> {
    return this.http.get("http://localhost:3000/get-profile-count").pipe(
      catchError((error: any) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
