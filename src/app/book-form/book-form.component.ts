import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Importez ReactiveFormsModule ici
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  editMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {
    this.bookForm = new FormGroup({
      title: new FormControl(''),
      author: new FormControl(''),
      publishedYear: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // console.log('Saliou');
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editMode = true;
      this.bookService.getBook(id).subscribe((data) => {
        this.bookForm.setValue({
          title: data.title,
          author: data.author,
          publishedYear: data.publishedYear,
        });
      });
    }
  }

  onSubmit(): void {
    const book: Book = this.bookForm.value;
    if (this.editMode) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.bookService.updateBook(id, book).subscribe(() => {
          this.router.navigate(['/']);
        });
      }
    } else {
      this.bookService.createBook(book).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
