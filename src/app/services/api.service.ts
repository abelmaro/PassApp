import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  API_KEY = '344f6c9cee5c452898eb982df244a208';
  constructor(private httpClient: HttpClient) { }

  public getNews() {
    return this.httpClient.get(`http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=344f6c9cee5c452898eb982df244a208`);
  }
}

