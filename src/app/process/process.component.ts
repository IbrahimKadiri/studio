import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.css'
})
export class ProcessComponent {
steps = [
  {
    title: 'Analyse & Planification',
    description: 'Compréhension détaillée de <span class="bg-lime-200 rounded-lg px-2 mt-1 inline-block text-black italic font-semibold ">vos besoins</span> et définition <span class="bg-lime-200 rounded-lg px-2 mt-1 inline-block text-black italic font-semibold">des objectifs</span> pour une stratégie efficace.'
  },
  {
    title: 'Conception',
    description: 'Définition de l’architecture et <span class="bg-lime-200 rounded-lg px-2 mt-1 inline-block text-black italic font-semibold">des fonctionnalités</span> pour un site efficace et intuitif.'
  },
  {
    title: 'Développement',
    description: 'Mise en œuvre technique du site avec <span class="bg-lime-200 rounded-lg px-2 mt-1 inline-block text-black italic font-semibold">performances</span> optimisées et compatibilité multi-supports.'
  },
  {
    title: 'Test & Livraison',
    description: 'Vérification complète et livraison <span class="bg-lime-200 rounded-lg px-2 mt-1 inline-block text-black italic font-semibold">d’un site clé en main</span>, prêt à l’usage et conforme à vos attentes.'
  }
];

}
