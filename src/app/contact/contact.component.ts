import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { animateSection } from '../shared/animations';
import { catchError, Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {
  toastMessage = '';
  toastType: 'success' | 'error' | 'warning' = 'success';

  constructor(private _http: HttpClient) {}
   @ViewChild('contactSection', { static: true }) contactSection!: ElementRef;

  ngAfterViewInit(): void {
    const section = this.contactSection.nativeElement;
    animateSection(section);
  }
  
   // Fonction de soumission du formulaire
  onSubmit(formData: any): void {

    // Vérifier les champs
    if (!formData.value.firstName || !formData.value.lastName || !formData.value.email || !formData.value.message) {
      this.showToast('Veuillez remplir tous les champs.', 'warning');
      return;
    }
    const formToSend = new FormData();
    formToSend.append('firstName', formData.value.firstName);
    formToSend.append('lastName', formData.value.lastName);
    formToSend.append('email', formData.value.email);
    formToSend.append('message', formData.value.message);
    console.log('Message envoyé avec succès!', formToSend);

    // Envoi du formulaire via le service
    this.sendMessage(formToSend).subscribe(
      response => {
        console.log('Message envoyé avec succès!', response, formToSend);
        this.showToast('Message envoyé avec succès !', 'success');
      },
      error => {
        console.error('Erreur lors de l\'envoi du message:', error);
        this.showToast('Erreur lors de l’envoi. Réessayez.', 'error');
      }
    );
  }

   // Méthode pour envoyer un message via Formsubmit
  sendMessage(formData: FormData): Observable<any> {
    const url = 'https://formsubmit.co/ajax/cc180f2c2dbad1fe14a87760608de7ae';

    // On envoie la requête et on capture les erreurs via catchError
    return this._http.post(url, formData).pipe(
      catchError(error => {
        // Gestion de l'erreur (par exemple, log de l'erreur)
        console.error('Erreur lors de l\'envoi du formulaire:', error);
        throw error;  // On relance l'erreur pour la gérer dans le composant
      })
    );
  }

   showToast(message: string, type: 'success' | 'error' | 'warning') {
    this.toastMessage = message;
    this.toastType = type;
    setTimeout(() => this.toastMessage = '', 4000); // disparaît après 4s
  }
}
