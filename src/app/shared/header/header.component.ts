import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks) { // Verifica se navLinks não é nulo
      navLinks.classList.toggle('active'); // Adiciona ou remove a classe 'active'
    } // Adiciona ou remove a classe 'active'
  }
}
