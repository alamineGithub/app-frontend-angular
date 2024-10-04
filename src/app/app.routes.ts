import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

export const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'books/new', component: BookFormComponent },
  { path: 'books/:id', component: BookDetailComponent, pathMatch: 'full' },
  { path: 'books/:id/edit', component: BookFormComponent },
];
