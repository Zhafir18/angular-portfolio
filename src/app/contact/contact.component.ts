import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  darkTheme: boolean = false;

  contact = {
    name: '',
    email: '',
    message: '',
  };

  sendEmail() {
    const mailtoLink = `mailto:${
      this.contact.email
    }?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(
      this.contact.name
    )}%0D%0AEmail:%20${encodeURIComponent(
      this.contact.email
    )}%0D%0AMessage:%20${encodeURIComponent(this.contact.message)}`;

    window.location.href = mailtoLink;
  }
}
