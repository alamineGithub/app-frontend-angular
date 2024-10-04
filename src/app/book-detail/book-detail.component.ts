import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterModule], // Assurez-vous que RouterModule est importé ici
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log('details');
      this.bookService.getBook(id).subscribe((data) => {
        this.book = data;
      });
    }
  }

  // deleteBook(id: string): void {
  //   this.bookService.deleteBook(id).subscribe(() => {
  //     this.router.navigate(['/']);
  //   });
  // }
  deleteBook(id: string | undefined): void {
    if (id) {
      // Vérifiez que l'ID n'est pas undefined
      this.bookService.deleteBook(id).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      // Gérez le cas où l'ID est undefined (afficher un message d'erreur, par exemple)
    }
  }
}
