import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import {BookModel, FOR_SALE, NOT_FOR_SALE} from '../book.model';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css'],
})
export class ListBookComponent implements OnInit {
  books: BookModel[] = [];
  bookDetails: BookModel = null;
  FOR_SALE_IN_VIEW = FOR_SALE;
  NOT_FOR_SALE_IN_VIEW = NOT_FOR_SALE;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBook().subscribe((res: any) => {
      if (res.items && res.items.length > 0) {
        this.books = res.items;
      }
    }, (err) => {
      console.log(err);
    });
  }

  onViewDetails(book) {
    this.bookDetails = book;
  }

}
