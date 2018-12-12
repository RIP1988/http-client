import { BookService } from './../../services/book.service';
import { HttpClient } from '@angular/common/http';
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

  constructor(private httpClient: HttpClient, private bookService: BookService) { }

  ngOnInit() {
  }

  getBooks() {
    this.bookService.getBooks().subscribe((response) => {
      this.books = response;
    });
  }

  saveBook() {
    this.bookService.saveBook();
  }

  initDB() {
    this.bookService.initDb();
    this.initAllowed = false;
  }

}
