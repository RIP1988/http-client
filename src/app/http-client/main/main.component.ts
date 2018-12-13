import { BookService } from './../../services/book.service';
import { Book } from './../Book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  initAllowed = true;
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.booksSubject.subscribe((books) => {
      this.books = books;
    })
    this.bookService.getBooks();
  }

  saveBook() {
    this.bookService.saveBook();
  }

  initDB() {
    this.bookService.initDb();
    this.initAllowed = false;
  }

}
