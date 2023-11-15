import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { GithubService } from 'src/app/services/github.service';
import { Repository } from 'src/app/types/repository.interface';

@Component({
  selector: 'app-github-section',
  templateUrl: './github-section.component.html'
})
export class GithubSectionComponent implements OnInit {
  public repositories: Repository[] = []

  constructor(private githubService: GithubService) {

  }

  ngOnInit(): void {
    this.githubService.getRepos()
    .subscribe({
      next: (response) => this.repositories = response,
      error: (erro) => console.log(erro)
    })
  }
}
