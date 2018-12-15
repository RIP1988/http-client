import { HttpClient } from '@angular/common/http';
import { BookService } from './../../services/book.service';
import { Book } from './../Book';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

bookForm = new FormGroup({
  title: new FormControl(null, [Validators.required]),
  author: new FormControl(null, [Validators.required])
});
editPage = false;

  constructor(private bookService: BookService, private httpClient: HttpClient,
    private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    const id: number = +this.route.snapshot.params['id'];
    let editedBook: Book;
    if (id) {
      this.bookService.bookSubject.subscribe((book) => {
        if (book) {
          editedBook = new Book(book.id, book.title, book.author);
          this.bookForm.patchValue({
            title: editedBook.getTitle(),
            author: editedBook.getAuthor()
          });
          this.editPage = true;
        } else {
          this.router.navigate(['/book']);
        }
      });
      this.bookService.getBook(id);
    } else {
      this.router.navigate(['/book']);
    }
  }

  saveBook() {
    const id: number = +this.route.snapshot.params['id'];
    const title = this.bookForm.get('title').value;
    const author = this.bookForm.get('author').value;
    const newOrEditedBook = new Book(id,
      title,
      author);
    if (id) {
      this.bookService.editBook(newOrEditedBook);
    } else {
      this.bookService.saveBook(newOrEditedBook);
    }
    this.bookForm.reset();
    this.router.navigate(['/book']);
  }

}
