import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Repository } from '../types/repository.interface';
import { Languages } from '../types/programming-language.interface';

export const GITHUB_API_URL = "https://api.github.com/users/Renans0ares/repos"
export const xxx = "https://api.github.com/repos/Renans0ares/portifolio/languages"

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  getRepos(): Observable<Repository[]>{
    return this.httpClient.get<Repository[]>(GITHUB_API_URL)
  }

  getLanguages(language?: string): Observable<Languages[]> {
    let real_url = language ?? 'Fail'
    return this.httpClient.get<Languages[]>(real_url);
  }
}
