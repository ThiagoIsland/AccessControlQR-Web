import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {
  private baseUrl = 'https://localhost:7243/api/Visitor';

  constructor(private http: HttpClient) {}

  registerVisitor(username: string, email: string, phone: string, status: string){
    return this.http.post(`${this.baseUrl}/register`, { username, email, phone, status })
  }

  generateQr(userId: any, name: string, email: string){
    return this.http.post(`${this.baseUrl}/generate`, {userId, name, email} )
  }

  validateAccess(QrCodeScanned: string, idVisitor: any, user: string, accessType: string){
    const params = new HttpParams().set('QrCodeScanned', QrCodeScanned).set('idVisitor', idVisitor).set('user', user).set('accessType', accessType);
    return this.http.get(`${this.baseUrl}/validateAccess`,  {params} )
  }

  getQrCode(name: string){
    return this.http.get(`${this.baseUrl}/validateAccess/${name}`)
  }
}