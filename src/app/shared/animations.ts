// src/app/shared/animations.ts
import { ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Check mobile une fois pour toutes
export const isMobile = window.matchMedia("(max-width: 768px)").matches;

/** Fade + Up */
export const fadeUp = (element: any, duration = 1, delay = 0) => {
  if (!element) return;

  gsap.from(element, {
    y: isMobile ? 30 : 50,
    opacity: 0,
    duration,
    delay,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: isMobile ? 'top 90%' : 'top 80%',
      toggleActions: 'restart none none none',
    },
  });
};

/** Fade + Down */
export const fadeDown = (element: any, duration = 1, delay = 0) => {
  if (!element) return;

  gsap.from(element, {
    y: isMobile ? -30 : -50,
    opacity: 0,
    duration,
    delay,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: isMobile ? 'top 90%' : 'top 80%',
      toggleActions: 'play none none none',
    },
  });
};

/** Fade + Left */
export const fadeLeft = (element: any, duration = 3, delay = 0) => {
  if (!element) return;

  gsap.from(element, {
    x: isMobile ? -30 : -50,
    opacity: 0,
    duration,
    delay,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: isMobile ? 'top 70%' : 'top 60%',
      toggleActions: 'play none none none',
    },
  });
};

/** Fade + Right */
export const fadeRight = (element: any, duration = 1, delay = 0) => {
  if (!element) return;

  gsap.from(element, {
    x: isMobile ? 30 : 50,
    opacity: 0,
    duration,
    delay,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: isMobile ? 'top 90%' : 'top 80%',
      toggleActions: 'play none none none',
    },
  });
};

/** Scale up */
export const scaleUp = (element: any, duration = 1, delay = 0) => {
  if (!element) return;

  gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration,
    delay,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: element,
      start: isMobile ? 'top 90%' : 'top 80%',
      toggleActions: 'play none none none',
    },
  });
};

/** Bounce vertical */
export const bounceY = (element: any, duration = 1, delay = 0, distance = 30) => {
  if (!element) return;

  gsap.fromTo(
    element,
    { y: isMobile ? -distance / 2 : -distance },
    {
      y: 0,
      duration,
      delay,
      ease: 'bounce.out',
      scrollTrigger: {
        trigger: element,
        start: isMobile ? 'top 90%' : 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
};

/** Marquee horizontal infini */
export const marqueeHorizontal = (container: any, duration = isMobile ? 40 : 20) => {
  if (!container) return;

  const content = container.children[0];
  const totalWidth = content.offsetWidth;

  const clone = content.cloneNode(true);
  container.appendChild(clone);

  gsap.fromTo(
    container.children,
    { x: 0 },
    {
      x: -totalWidth,
      duration,
      ease: 'linear',
      repeat: -1,
    }
  );
};

/** Glow pulse animation (utile pour titres) */
export const glowPulse = (element: any, color = '#BEF264', duration = 1.5) => {
  if (!element) return;

  gsap.to(element, {
    textShadow: `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`,
    duration,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};

/** Fade Up en cascade pour plusieurs éléments */
export const fadeUpStagger = (elements: any, duration = 1.5, stagger = 0.2) => {
  if (!elements) return;

  gsap.from(elements, {
    opacity: 0,
    y: isMobile ? 30 : 60,
    duration,
    stagger,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: elements[0],
      start: isMobile ? 'top 90%' : 'top 60%',
      toggleActions: 'restart none none none',
    },
  });
};

/** Mots surlignés animés */
export const highlightWords = (elements: any, duration = 1.5, stagger = 0.6) => {
  if (!elements) return;

  gsap.from(elements, {
    opacity: 0,
    y: isMobile ? 30 : 60,
    duration,
    stagger,
    ease: 'back.in',
    scrollTrigger: {
      trigger: elements[0],
      start: isMobile ? 'top 95%' : 'top 80%',
      toggleActions: 'restart none none none',
    },
  });
};

/** Animation complète d’une section */
export const animateSection = (section: HTMLElement) => {
  if (!section) return;

  // Sous-titre
  fadeUp(section.querySelector('span'), 3);

  // Titre principal
  fadeLeft(section.querySelector('h2'), 1.5);

  // Cards en cascade
  fadeLeft(section.querySelectorAll('.card'));

  // Mots surlignés
  highlightWords(section.querySelectorAll('.big-word'));
};

/** Fade + up pour mots surlignés */
export const fadeUpWords = (elements: NodeListOf<HTMLElement>, duration = 1, stagger = 1) => {
  if (!elements || elements.length === 0) return;

  gsap.from(elements, {
    delay: 2,
    opacity: 0,
    y: 20,
    duration,
    stagger,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: elements[0],
      start: 'top 80%',
      toggleActions: 'play none none none', // joue à l'entrée
    },
  });
};

/** Fade + scale pour bouton CTA */
export const fadeUpButton = (element: HTMLElement, duration = 1, delay = 0) => {
  if (!element) return;

  gsap.from(element, {
    opacity: 0,
    scale: 0.9,
    duration,
    delay,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: element,
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
  });
};

export const initLogo = (logoContainer: ElementRef, logoContent: ElementRef) => {

    const container = logoContainer.nativeElement;
    const content = logoContent.nativeElement;

    const containerWidth = container.offsetWidth;
    const contentWidth = content.scrollWidth;
    const distance = contentWidth - containerWidth; 

    gsap.to(content, {
      x: -distance,
      duration: 13,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
};