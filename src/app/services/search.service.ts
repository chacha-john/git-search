import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(public http:HttpClient) { }
  getInfo(user:string):Observable<any>{ 
    return this.http.get<any>(`${environment.userEndPoint}/${user}?api_key=${environment.access_token}&limit=10`)
    .pipe(retry(5))
  }
  getRepos(repo:string){
    return this.http.get<any>(`${environment.reposEndPoint}?q=${repo}&api_key${environment.access_token}&limit=10`)
    .pipe(retry(5))
  }
}
