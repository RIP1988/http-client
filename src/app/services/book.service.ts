import { Book } from './../http-client/Book';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [];
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

  getBook(id): Book {
    return this.books.find(book => book.id === id);
  }

  saveBook(book: Book) {
    return this.httpClient.post('/api/savebook', book).subscribe((savedBook: Book) => {
      this.books.push(savedBook);
    });
  }

  editBook(bookToBeSaved: Book) {
    return this.httpClient.put('/api/savebook', bookToBeSaved).subscribe((savedBook: Book) => {
      const bookInArray = this.books.find(book => book.id === savedBook.id);
      const index = this.books.indexOf(bookInArray);
      this.books[index] = bookToBeSaved;
    });
  }

  initDb() {
    this.httpClient.post('/api/init', null).subscribe((books: Book[]) => {
      books.forEach(book => {
        this.books.push(book);
      });
      this.getBooks();
    });
  }
}
