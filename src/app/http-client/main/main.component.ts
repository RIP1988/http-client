import { Router } from '@angular/router';
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

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.bookService.booksSubject.subscribe((books) => {
      this.books = books;
    });
    this.bookService.getBooks();
  }

  initDB() {
    this.bookService.initDb();
    this.initAllowed = false;
  }

  openEditBook(id) {
    this.router.navigate(['book', id]);
  }

}
