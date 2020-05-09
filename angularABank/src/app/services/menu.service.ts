import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private headers = new HttpHeaders();
  private apiPath: string;
  
constructor( private http: HttpClient,) {
  
 }
 getMenu(): Observable<any[]> {
return this.http.get<any[]>(environment.apiUrl+'/menu');
}
}
