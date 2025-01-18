import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IpServiceService {
  private baseUrl = 'http://localhost:8080'; 
  constructor(private http: HttpClient) {}

  getSuspiciousIps(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/suspicious`);
  }

  checkIp(ip: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/check/${ip}`);
  }

  postIp(ip: string): Observable<boolean> {
    const url = `${this.baseUrl}/post`; 
    return this.http.post<boolean>(url, { ip });
  }

  validateIp(ip: string): boolean {
    const ipRegex =
      /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;
    return ipRegex.test(ip);
  }
}
