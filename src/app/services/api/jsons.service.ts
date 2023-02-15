import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonsService {

  constructor(private httpClient: HttpClient) { }
  privateURI = 'https://jsonplaceholder.typicode.com/posts';

  getPosts(){
    return this.httpClient.get(this.privateURI);
  }
}
