import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { animateHero, fadeUp, initHeroParticles} from '../shared/animations';
import { menuItems } from '../shared/data';

gsap.registerPlugin(ScrambleTextPlugin);
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  mobileNavOpen = false;
  menuItems = menuItems;
  @ViewChild('heroTitle') heroTitle!: ElementRef;
  @ViewChild('heroSection', { static: true }) heroSection!: ElementRef;
 
  ngAfterViewInit(): void { 
    const el = this.heroTitle.nativeElement;
    const text = el.textContent;
    el.textContent = ''; // on vide le texte pour injecter les spans

    // On wrap chaque lettre dans un span
    text.split('').forEach((char: any) => {
      const span = document.createElement('span');
      span.classList.add('hero-letter');
      span.textContent = char;
      el.appendChild(span);
    });

    // Timeline GSAP
    const tl = gsap.timeline();
    tl.fromTo('.hero-letter', 
      { opacity: 0, y: 20},
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.1, 
        duration: 4, 
        ease: 'expo',
      }
    );

    const section = this.heroSection.nativeElement;
    animateHero(section);
    initHeroParticles('heroParticles', 40);
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.mobileNavOpen = false; // ferme le menu
  }
}
