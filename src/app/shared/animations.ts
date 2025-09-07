// src/app/shared/animations.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initHeroParticles = (canvasId: string, particleCount: number = 50) => {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
  }

  const particlesCount = particleCount;
  const particles: Particle[] = [];

  for (let i = 0; i < particlesCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
    });
  }

  const draw = () => {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dessin des particules
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.2)'; // Blanc très transparent
      ctx.fill();
    });

    // Lignes entre particules proches
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) { // distance max pour connecter
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(255,255,255,0.05)'; // Ligne très subtile
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // Mise à jour positions
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });

    requestAnimationFrame(draw);
  };

  draw();

  // Ajustement responsive
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Recréer les particules adaptées à la nouvelle taille
    particles.length = 0;
    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }
  });
};
export function initParticles(canvasId: string) {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext("2d")!;
  let particles: { x: number; y: number; dx: number; dy: number }[] = [];
  const particleCount = 60;
  const maxDistance = 120;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  // Crée les particules
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Bouge + dessine particules
    particles.forEach((p) => {
      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.fill();
    });

    // Relie particules proches
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(255,255,255,${1 - dist / maxDistance})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }
  animate();
}

// hero-particles.ts
export const initHeroParticlesCanvas = (canvas: HTMLCanvasElement, particleCount = 80) => {
   if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const particles: any[] = [];
  const mouse: any = { x: null, y: null, radius: 100 };

  // Resize canvas
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Track mouse
  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Initialize particles
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 2,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.3,
      trail: []
    });
  }

  const drawParticles = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      // Update position
      p.x += p.vx;
      p.y += p.vy;

      // Bounce on edges
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      // Mouse interaction
      if (mouse.x && mouse.y) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - dist) / mouse.radius;
          p.vx += Math.cos(angle) * force * 0.5;
          p.vy += Math.sin(angle) * force * 0.5;
        }
      }

      // Save trail
      p.trail.push({ x: p.x, y: p.y });
      if (p.trail.length > 12) p.trail.shift();

      // Draw trail
      for (let i = 0; i < p.trail.length; i++) {
        const t = p.trail[i];
        ctx.beginPath();
        ctx.arc(t.x, t.y, p.size * (i / p.trail.length), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity * 0.2})`; // #60A5FA
        ctx.fill();
      }

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${p.opacity * 0.2})`;
      ctx.fill();
    });

    requestAnimationFrame(drawParticles);
  };

  drawParticles();
};

export const particleBackground = (canvas: HTMLCanvasElement, particleCount = 80) => {
  if (!canvas) return;
  const ctx: any = canvas.getContext('2d');
  if (!ctx) return;

  let width = canvas.offsetWidth;
  let height = canvas.offsetHeight;
  canvas.width = width;
  canvas.height = height;

  class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    opacity: number;

    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 2 + 1;
      this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }
  }

  const particles: Particle[] = [];
  for (let i = 0; i < particleCount; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.strokeStyle = `rgba(255,255,255,${(1 - dist / 120) * 0.15})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      ctx.fillStyle = `rgba(255,255,255,${p.opacity * 0.2})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;
  });
};

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
  ScrollTrigger.refresh();
  gsap.from(element, {
    x: isMobile ? -30 : -50,
    opacity: 0,
    duration,
    delay,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: isMobile ? 'top 70%' : 'top 70%',
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
  console.log('fadeUpStagger',elements )
  gsap.from(elements, {
    opacity: 0,
    y: isMobile ? 30 : 60,
    duration,
    stagger,
    ease: 'power3.out'
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
export const animateHero = (section: HTMLElement) => {
  if (!section) return;

  // Sous-titre
  fadeUp(section.querySelector('p'), 3, 1);

  // Titre principal
  fadeLeft(section.querySelector('h1'), 3);

  // lien en cascade
  fadeUpStagger(section.querySelectorAll('a'), 2, 0.4);

  fadeUpWords(section.querySelectorAll('.word'));

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
export const fadeUpWords = (elements: any, duration = 1, stagger = 1) => {
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
export const fadeUpButton = (element: any, duration = 1, delay = 0) => {
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

/**
 * Yoyo horizontal marquee pour logos ou éléments similaires.
 * @param container ElementRef du container principal
 * @param content ElementRef du contenu à animer
 * @param duration Durée de l'animation en secondes
 */
export const initLogo = (container: any, content: any, duration = 13) => {
  if (!container || !content) return;

  // attendre que le contenu ait une largeur définie
  const runAnimation = () => {
    const containerEl = container.nativeElement;
    const contentEl = content.nativeElement;

    const containerWidth = containerEl.offsetWidth;
    const contentWidth = contentEl.scrollWidth;
    const distance = contentWidth - containerWidth;

    if (distance <= 0) return; // rien à animer si le contenu est plus petit que le container

    gsap.to(contentEl, {
      x: -distance,
      duration,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
  };

  // Si le DOM n’est pas encore rendu, on attend un tick Angular
  setTimeout(runAnimation, 0);
};