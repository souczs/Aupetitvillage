import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { Product as ProductModel } from '../../models/product.model'; // alias
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class Product implements OnInit {
  product: ProductModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cdr: ChangeDetectorRef
  ) {}

   ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProducts().subscribe(data => {
      this.product = data.find(p => p.id === id);
      this.cdr.detectChanges();
    });
  }
}