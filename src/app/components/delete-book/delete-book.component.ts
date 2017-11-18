import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  id: any;
  bookTitle;
  bookDescription;
  constructor(private firebaseService: FirebaseService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id']
    this.firebaseService.getBookDetails(this.id).subscribe(book => {
      this.bookTitle = book.title;
      this.bookDescription = book.description;
    })
  }
  removeBook() {
    this.firebaseService.deleteBook(this.id);
    this.router.navigate(['books'])
  }
}
