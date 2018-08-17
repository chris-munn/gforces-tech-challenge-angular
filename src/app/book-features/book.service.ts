import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class BookService {
  GOOGLE_BOOK_API = environment.googleBookAPI;
  url = 'https://www.googleapis.com/books/v1/volumes?q=inauthor:Stephen King&maxResults=40';
  urlDetails = 'https://www.googleapis.com/books/v1/volumes/{id}';
  constructor(private $http: HttpClient) { }

  getBook() {
    return this.$http.get(this.url + '&key=' + this.GOOGLE_BOOK_API);
  }
  getBookDetails(id) {
    return this.$http.get(this.urlDetails.replace('{id}', id) + '?key=' + this.GOOGLE_BOOK_API);
  }

}
