import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, Params } from '@angular/router';
import { BookModel } from '../book.model';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css'],
})
export class DetailsBookComponent implements OnInit {
  bookDetails: BookModel = null;
  constructor(private bookService: BookService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        const id = params['id'];
        this.bookService.getBookDetails(id).subscribe((res: any) => {
          this.bookDetails = res;
        }, (err: any) => {
          console.log(err);
        });
      });
  }

}
