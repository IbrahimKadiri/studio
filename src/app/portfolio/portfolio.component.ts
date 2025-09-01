import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
 projects = [
    {
      title: 'Site e-commerce moderne',
      image: 'assets/images/portfolio/ecommerce.jpg',
      description: 'Site performant et intuitif, adapté aux besoins spécifiques de petites entreprises.',
      cta: { text: 'Voir le projet', link: '/portfolio/ecommerce' }
    },
    {
      title: 'Application mobile responsive',
      image: 'assets/images/portfolio/mobile-app.jpg',
      description: 'Développement d’une application mobile fluide et adaptée aux utilisateurs finaux.',
      cta: { text: 'Voir le projet', link: '/portfolio/mobile-app' }
    },
    {
      title: 'Refonte graphique site vitrine',
      image: 'assets/images/portfolio/refonte.jpg',
      description: 'Optimisation des performances et mise en avant des contenus clés pour les clients.',
      cta: { text: 'Voir le projet', link: '/portfolio/refonte' }
    },
    // Ajouter d’autres projets facilement ici
  ];
}
