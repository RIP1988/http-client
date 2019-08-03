import { BookService } from './services/book.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { BookFormComponent } from './http-client/book-form/book-form.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './http-client/main/main.component';
import { FunComponent } from './http-client/fun/fun.component';

@NgModule({
   declarations: [
      AppComponent,
      HttpClientComponent,
      BookFormComponent,
      MainComponent,
      FunComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      ReactiveFormsModule,
      AppRoutingModule,
      AppRoutingModule
   ],
   providers: [BookService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
