import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  books: any;
  currentBook:any;
  currentIndex = -1;
  searchTitle = '';
  title = 'ng-carousel-demo';
   
  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "assets/Page1.png"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "assets/Page3.png"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "assets/Side image.png"}
  ];

  constructor(private booksService: ProductsService,config: NgbCarouselConfig) {
     config.interval = 5000;
      config.keyboard = true;
      config.pauseOnHover = true;
   }

  ngOnInit(): void {
    this.getAllBooks();
  }

  // Get list
  getAllBooks(): void {
    this.booksService.list()
      .subscribe(
        (books: any) => {
          this.books = books;
        },
        (error: any) => {
          console.log(error);
        });
  }

  // Search items
  searchByTitle(): void {
    this.booksService.filterByName(this.searchTitle)
      .subscribe(
        books => {
          this.books = books;
        },
        error => {
          console.log(error);
        });
  }

}
