import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { animateSection } from '../shared/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {

   @ViewChild('contactSection', { static: true }) contactSection!: ElementRef;

  ngAfterViewInit(): void {
    const section = this.contactSection.nativeElement;
    animateSection(section);
  }
  
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
