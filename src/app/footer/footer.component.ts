import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { menuItems } from '../shared/data';
import { CommonModule } from '@angular/common';
import { initHeroParticles } from '../shared/animations';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements AfterViewInit {
  menuItems = menuItems;
  
  @ViewChild('footerParticles', { static: true }) footerParticles!: ElementRef;

  ngAfterViewInit(): void {
    initHeroParticles('footerParticles', 30);
  }
}
