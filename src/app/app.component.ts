import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ServicesComponent } from "./services/services.component";
import { ProcessComponent } from "./process/process.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";
import { StackComponent } from "./stack/stack.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ServicesComponent, ProcessComponent, PortfolioComponent, ContactComponent, StackComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agence-web';
}
