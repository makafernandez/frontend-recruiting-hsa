import { map, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitHubAPIService {
  url = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  generateHeaders() {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/vnd.github.v3+json');
    return headers;
  }

  getUserDetails(username): Observable<any> {
    return this.http.get(`${this.url}${username}`, { headers: this.generateHeaders() }).pipe(
      take(1));
  }

  getUserRepos(username): Observable<any> {
    return this.http.get(`${this.url}${username}/repos`, { headers: this.generateHeaders() });
  }
}
