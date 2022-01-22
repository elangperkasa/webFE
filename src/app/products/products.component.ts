import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  currentIndex = -1;
  searchName = '';

  constructor(private productsService: ProductsService) { }
  

  ngOnInit(): void {
    this.getAllProducts();
  }

  // Get list
  getAllProducts(): void {
    this.productsService.list()
      .subscribe(
        (products: any) => {
          this.products = products;
        },
        (error: any) => {
          console.log(error);
        });
  }

    // Search items
    searchByName(): void {
      this.productsService.filterByName(this.searchName)
        .subscribe(
          products => {
            this.products = products;
          },
          error => {
            console.log(error);
          });
    }

}
