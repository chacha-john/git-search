import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchServiceService {


  constructor(public http:HttpClient) { }

  getInfo():any{
    let url =  this.http.get<any>(`${environment.end_point}?api_key=${environment.access_token}`)
    console.log(url);
    
    
  }
}
