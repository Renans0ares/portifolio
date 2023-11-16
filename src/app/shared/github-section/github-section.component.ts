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
  public languages: string[] = []

  ngOnInit(): void {

    this.githubService.getRepos()
      .subscribe({
        next: (response) => {
          this.repositories = response;

          // Para cada repositório, chame getLanguages() passando a 'url'
          this.repositories.forEach(repository => {
            this.githubService.getLanguages(repository.languages_url)
              .subscribe({
                next: (languages) => {
                  // Preencha o atributo 'linguagem-de-prog' com os idiomas obtidos
                  repository.programming_language = languages;
                  console.log(repository.programming_language)
                },
                error: (erro) => console.log(erro)
              });
          });
        },
        error: (erro) => console.log(erro)
      });


    // this.githubService.getRepos()
    //   .subscribe({
    //     next: (response) => this.repositories = response,
    //     error: (erro) => console.log(erro)
    //   })

    // this.githubService.getLanguages()
    //   .subscribe({
    //     next: (resposta) => console.log(resposta),
    //     error: (erro) => console.log(erro)
    //   })
  }
}
