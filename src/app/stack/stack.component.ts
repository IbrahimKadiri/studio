import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { animateSection, initLogo } from '../shared/animations';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.css'
})
export class StackComponent {
  
  logos = [
    { name: 'Angular', src: 'assets/icons/angular.svg' },
    { name: 'CSS3', src: 'assets/icons/css3.svg' },
    { name: 'Git', src: 'assets/icons/git.svg' },
    { name: 'GitHub', src: 'assets/icons/github.svg' },
    { name: 'Heroku', src: 'assets/icons/heroku.svg' },
    { name: 'HTML5', src: 'assets/icons/html5.svg' },
    { name: 'JavaScript', src: 'assets/icons/javascript.svg' },
    { name: 'MongoDB', src: 'assets/icons/mongodb.svg' },
    { name: 'Node.js', src: 'assets/icons/nodejs.svg' },
    { name: 'NPM', src: 'assets/icons/npm.svg' },
    { name: 'PHP', src: 'assets/icons/php.svg' },
    { name: 'React', src: 'assets/icons/react.svg' },
    { name: 'RxJS', src: 'assets/icons/rxjs.svg' },
    { name: 'Sass', src: 'assets/icons/sass.svg' },
    { name: 'SQL', src: 'assets/icons/sql.svg' },
    { name: 'TailwindCSS', src: 'assets/icons/tailwindcss.svg' },
    { name: 'TypeScript', src: 'assets/icons/typescript.svg' },
    { name: 'AWS', src: 'assets/icons/aws.svg' }
  ];

  @ViewChild('stackSection', { static: true }) stackSection!: ElementRef;
  @ViewChild('marqueeContainer') marqueeContainer!: ElementRef;
  @ViewChild('marqueeContent') marqueeContent!: ElementRef;

  ngAfterViewInit(): void {
    const section = this.stackSection.nativeElement;
    animateSection(section);
    initLogo(this.marqueeContainer, this.marqueeContent);
  }

  
}
