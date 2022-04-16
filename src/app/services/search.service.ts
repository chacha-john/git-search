import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(public http:HttpClient) { }
  getInfo(user:string):Observable<any>{
    let url =  this.http.get<any>(`${environment.end_point}?api_key=${environment.access_token}`)
    console.log(url);
    return url
    
    
  }
}
