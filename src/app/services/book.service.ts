import { Book } from './../http-client/Book';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[];
  booksSubject = new Subject<Book[]>();

  constructor(private httpClient: HttpClient) { }

  getBooks() {
    this.booksSubject.next(this.books);
  }

  getBooksFromDb() {
    return this.httpClient.get<Book[]>('/api/books').subscribe((books) => {
      this.books = books;
    });
  }

  getBook(id): Observable<Book> {
    const params = new HttpParams().set('id', id);
    return this.httpClient.get<Book>('/api/book', {params});
  }

  saveBook(book: Book) {
    return this.httpClient.post('/api/savebook', book).subscribe((savedBook: Book) => {
      this.books.push(savedBook);
    });
  }

  initDb() {
    this.httpClient.post('/api/init', null).subscribe((books: Book[]) => {
      this.books = books;
      this.getBooks();
    });
  }
}
