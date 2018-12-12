import { Book } from './../http-client/Book';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('/api/books');
  }

  getBook(id): Observable<Book> {
    const params = new HttpParams().set('id', id);
    return this.httpClient.get<Book>('/api/book', {params});
  }

  saveBook() {
    return this.httpClient.post('/api/book', null).subscribe();
  }

  initDb() {
    this.httpClient.post('/api/init', null).subscribe();
  }
}
