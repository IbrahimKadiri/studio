import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { animateHero, initHeroParticles} from '../shared/animations';
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
