import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';

export const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'books/new', component: BookFormComponent },
  { path: 'books/:id', component: BookDetailComponent, pathMatch: 'full' },
  { path: 'books/:id/edit', component: BookFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
