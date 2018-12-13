import { Book } from './http-client/Book';
import { BookService } from './services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'http-client';

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.initDb();
  }
}
