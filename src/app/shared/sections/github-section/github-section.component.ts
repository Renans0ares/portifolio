import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { GithubService } from 'src/app/services/github.service';
import { Repository } from 'src/app/types/repository.interface';

@Component({
  selector: 'app-github-section',
  templateUrl: './github-section.component.html'
})
export class GithubSectionComponent implements OnInit {

  constructor(private githubService: GithubService) {
  }

  public repositories: Repository[] = []
  
  ngOnInit(): void {

    this.githubService.getRepos()
      .subscribe({
        next: (response) => {
          this.repositories = response;
          this.repositories.forEach(repository => {
            this.githubService.getLanguages(repository.languages_url)
              .subscribe({
                next: (languages) => {
                  let emptyList = []
                  for (var i in languages) {
                    emptyList.push(i);
                  }
                  repository.programming_language = emptyList;
                },
                error: (erro) => console.log(erro)
              });
          });
        },
        error: (erro) => console.log(erro)
      });
  }
}
