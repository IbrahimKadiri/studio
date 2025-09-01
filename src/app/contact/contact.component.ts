import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted', form.value);
      alert('Merci pour votre message ! Nous vous répondrons rapidement.');
      form.reset();
    } else {
      alert('Veuillez remplir tous les champs requis.');
    }
  }
}
