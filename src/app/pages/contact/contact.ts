import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  contactData: ContactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit() {
    // Here we could add API integration or email service
    console.log('Form submitted:', this.contactData);
    // For now, we'll create a WhatsApp message
    const message = `Nuevo mensaje de contacto:
Nombre: ${this.contactData.name}
Email: ${this.contactData.email}
Teléfono: ${this.contactData.phone}
Mensaje: ${this.contactData.message}`;
    
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank');
    
    // Reset form
    this.contactData = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }
}
