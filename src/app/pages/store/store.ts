import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './store.html',
  styleUrl: './store.scss'
})
export class StoreComponent {
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts();
  }

  contactWhatsApp(product: Product) {
    window.open(this.productService.getWhatsAppLink(product), '_blank');
  }
}
