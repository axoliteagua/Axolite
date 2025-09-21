import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: "Filtro de Agua Premium",
      description: "Sistema de filtración avanzado con tecnología de ósmosis inversa para agua pura y cristalina.",
      price: 299.99,
      imageUrl: "assets/images/filter-premium.jpg",
      features: [
        "Ósmosis inversa de 5 etapas",
        "Elimina el 99.9% de contaminantes",
        "Fácil instalación",
        "Mantenimiento simple"
      ],
      specifications: {
        "Capacidad": "50 galones por día",
        "Dimensiones": "15x15x45 cm",
        "Vida útil": "12 meses",
        "Certificaciones": "NSF/ANSI 58"
      }
    },
    // Add more products as needed
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }

  getWhatsAppLink(product: Product): string {
    const message = `Hola, estoy interesado en el producto ${product.name} (ID: ${product.id}) con precio $${product.price}`;
    return `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(message)}`;
  }
}