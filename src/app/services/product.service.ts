import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

// Static catalog: add or edit products here and place images in src/assets/images/products/.
@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly whatsappNumber = '527208620864';

  private readonly products: Product[] = [
    {
      id: 1,
      name: 'Agua purificada Axolite',
      description: 'Agua purificada para disfrutar en casa, en la oficina y en los momentos que compartimos.',
      imageUrl: 'assets/images/products/agua-purificada.jpg',
      features: ['Pureza y frescura', 'Presentaciones para cada necesidad', 'Consulta disponibilidad por WhatsApp']
    },
    {
      id: 2,
      name: 'Agua embotellada Axolite',
      description: 'Una opción práctica para llevar, compartir y mantenerte hidratado donde estés.',
      imageUrl: 'assets/images/products/agua-embotellada.jpg',
      features: ['Lista para disfrutar', 'Ideal para hogar y negocio', 'Consulta presentaciones por WhatsApp']
    }
  ];

  getProducts(): Observable<Product[]> { return of(this.products); }
  getProduct(id: number): Observable<Product | undefined> { return of(this.products.find(product => product.id === id)); }

  getWhatsAppLink(product: Product): string {
    const message = `Hola, me interesa ${product.name}. ¿Podrían compartir disponibilidad y detalles?`;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
}
