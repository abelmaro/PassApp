import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = "https://localhost:5001/";
  API_KEY = '344f6c9cee5c452898eb982df244a208';
  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  public getNews() {
    return this.httpClient.get(`http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=344f6c9cee5c452898eb982df244a208`);
  }

  public getPost() {
    return this.httpClient.get(this.apiUrl +"api/Post/AllPosts");
  }
  public addLike(vm: object) {
    return this.httpClient.post(this.apiUrl + "api/Post/AddLike", vm);
  }

  public AddComment(vm: object): Observable<any> {
    
    return this.httpClient.post("https://localhost:5001/api/Comment/AddComment", JSON.stringify(vm), this.httpOptions);
  }

  public getComentarios() {
    return this.httpClient.get(this.apiUrl + "api/Comment/GetComments");
  }

  public GetComentariosByPostId() {
    return this.httpClient.get(this.apiUrl + "api/Comment/GetComentariosByPostId");
  }

  public DeleteComment(id: number) {
    return this.httpClient.delete("https://localhost:5001/api/Comment/DeleteComment?id=" + id);
  }
}

