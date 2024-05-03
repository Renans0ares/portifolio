import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Repository } from '../../shared/types/repository.interface';

export const GITHUB_API_URL = "https://api.github.com/users/Renans0ares/repos"

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  getRepos(): Observable<Repository[]>{
    return this.httpClient.get<Repository[]>(GITHUB_API_URL)
  }

  getLanguages(language?: string): Observable<Object> {
    let real_url = language ?? ''
    return this.httpClient.get<Object>(real_url);
  }
}
