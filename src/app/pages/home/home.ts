import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { FormsModule } from '@angular/forms';
import { SortByPricePipe } from '../../pipes/sort-by-price.pipe';
import { FilterByNamePipe } from '../../pipes/filter-by-name.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule, SortByPricePipe, FilterByNamePipe],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  private cdr = inject(ChangeDetectorRef);

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      console.log('Produits reçus:', data);
      this.products = data;
      this.cdr.detectChanges();
    });
  }
}



