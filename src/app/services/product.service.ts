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
      name: 'Purificador Axolite Casa',
      description: 'Una solución clara y confiable para disfrutar agua pura todos los días.',
      imageUrl: 'assets/images/products/purificador-casa.jpg',
      features: ['Filtración de varias etapas', 'Instalación sencilla', 'Mantenimiento práctico']
    },
    {
      id: 2,
      name: 'Purificador Axolite Negocio',
      description: 'Diseñado para espacios que necesitan una solución constante y de alto rendimiento.',
      imageUrl: 'assets/images/products/purificador-negocio.jpg',
      features: ['Mayor capacidad de servicio', 'Asesoría para instalación', 'Atención por WhatsApp']
    }
  ];

  getProducts(): Observable<Product[]> { return of(this.products); }
  getProduct(id: number): Observable<Product | undefined> { return of(this.products.find(product => product.id === id)); }

  getWhatsAppLink(product: Product): string {
    const message = `Hola, me interesa ${product.name}. ¿Podrían compartir disponibilidad y detalles?`;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
}
