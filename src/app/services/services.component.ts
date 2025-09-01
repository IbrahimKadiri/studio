import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  active = 'vitrine';

  menuItems = [
    {
      id: 'vitrine',
      label: 'Sites vitrines',
      title: 'Création de sites vitrines',
      description:
        "Offrez à votre activité une présence en ligne moderne et efficace. Design responsive, rapide et pensé pour mettre en avant vos services.",
      image: 'assets/images/dev2.svg',
      ctaText: 'Demander un devis',
    },
    {
      id: 'ecommerce',
      label: 'E-commerce',
      title: 'Boutiques en ligne',
      description:
        "Développez vos ventes grâce à une boutique claire et performante : catalogue simple à gérer, paiements sécurisés et optimisée pour la conversion.",
      image: 'assets/images/shop.svg',
      ctaText: 'Lancer ma boutique',
    },
    {
      id: 'seo',
      label: 'SEO',
      title: 'Optimisation SEO & visibilité locale',
      description:
        "Soyez trouvé par vos futurs clients grâce à un site optimisé pour Google et les recherches locales. On vous aide à grimper dans les résultats.",
      image: 'assets/images/seo.svg',
      ctaText: 'Améliorer ma visibilité',
    },
    {
      id: 'maintenance',
      label: 'Maintenance',
      title: 'Maintenance & accompagnement',
      description:
        "Concentrez-vous sur votre business, on s’occupe de votre site : mises à jour, sauvegardes, sécurité et support rapide.",
      image: 'assets/images/maintenance.svg',
      ctaText: 'Protéger mon site',
    },
    {
      id: 'branding',
      label: 'Branding',
      title: 'Identité visuelle & branding',
      description:
        "Démarquez-vous avec une identité forte : logo, charte graphique et supports digitaux cohérents pour votre communication.",
      image: 'assets/images/branding.svg',
      ctaText: 'Créer mon identité',
    },
  ];
}
