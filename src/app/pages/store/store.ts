import { Component } from '@angular/core';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [AsyncPipe, DecimalPipe],
  templateUrl: './store.html',
  styleUrl: './store.scss'
})
export class StoreComponent {
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts();
  }

  getWhatsAppLink(product: Product): string {
    return this.productService.getWhatsAppLink(product);
  }

  hideImage(event: Event) {
    (event.target as HTMLImageElement).hidden = true;
  }
}
