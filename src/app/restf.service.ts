import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Post } from './post';
    
@Injectable({
  providedIn: 'root'
})
export class PostService {
    
  private apiURL = "https://jsonplaceholder.typicode.com";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  // getAll(): Observable<Post[]> {
  //   return this.httpClient.get<Post[]>(this.apiURL + '/posts/')
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )

    
  }
    
      
   
 
  
}