import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { animateSection } from '../shared/animations';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.css'
})
export class ProcessComponent implements AfterViewInit{
  steps = [
    {
      title: 'Analyse & Planification',
      description: 'Compréhension détaillée de <span class="big-word bg-lime-200 rounded-lg px-2 mt-1 inline-block text-black italic font-semibold ">vos besoins</span> et définition <span class="big-word bg-lime-200 rounded-lg px-2 mt-1 inline-block text-black italic font-semibold">des objectifs</span> pour une stratégie efficace.'
    },
    {
      title: 'Conception',
      description: 'Définition de l’architecture et <span class="big-word bg-lime-200 rounded-lg px-2 mt-1 inline-block text-black italic font-semibold">des fonctionnalités</span> pour un site efficace et intuitif.'
    },
    {
      title: 'Développement',
      description: 'Mise en œuvre technique du site avec <span class="big-word bg-lime-200 rounded-lg px-2 mt-1 inline-block text-black italic font-semibold">performances</span> optimisées et compatibilité multi-supports.'
    },
    {
      title: 'Test & Livraison',
      description: 'Vérification complète et livraison <span class="big-word bg-lime-200 rounded-lg px-2 mt-1 inline-block text-black italic font-semibold">d’un site clé en main</span>, prêt à l’usage et conforme à vos attentes.'
    }
  ];

  @ViewChild('processSection', { static: true }) processSection!: ElementRef;

  ngAfterViewInit() {
    const section = this.processSection.nativeElement;
    animateSection(section);
    
  }
}
