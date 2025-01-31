import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  darkTheme: boolean = false;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: [''],
      email: ['', [Validators.email]],
      message: [''],
    });
  }

  sendEmail() {
    if (this.contactForm.valid) {
      const { name, email, message } = this.contactForm.value;
      const mailtoLink = `mailto:?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(
        name
      )}%0D%0AEmail:%20${encodeURIComponent(
        email
      )}%0D%0AMessage:%20${encodeURIComponent(message)}`;

      window.location.href = mailtoLink;
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}
