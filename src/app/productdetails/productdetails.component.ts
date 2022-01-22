import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  currentBook: any;
  message = '';
  idnya: any;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.idnya= this.route.snapshot.paramMap.get('data');
    this.getProduct(this.route.snapshot.paramMap.get('data'));

  }

  getProduct(data: string | null): void {
    this.productsService.getItem(data)
      .subscribe(
        (products: null) => {
          this.currentBook = products;
          console.log(products);
        },
        (error: any) => {
          console.log(error);
        });
  }

}
