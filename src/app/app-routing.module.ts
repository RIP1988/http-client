import { BookFormComponent } from './http-client/book-form/book-form.component';
import { FunComponent } from './http-client/fun/fun.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './http-client/main/main.component';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'book', component: BookFormComponent },
  { path: 'book/:id', component: BookFormComponent },
  { path: 'fun', component: FunComponent },
  { path: '',   redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
