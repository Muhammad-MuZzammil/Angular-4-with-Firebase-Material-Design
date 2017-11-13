import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  id: any;
  title;
  author;
  dateadded;
  dateread;
  price;
  rate;
  description;
  imageUrl;
  constructor(private firebaseService: FirebaseService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Id of the book
    this.id = this.activeRoute.snapshot.params['id']
    this.firebaseService.getBookDetails(this.id).subscribe(book => {
      this.title = book.title;
      this.author = book.author;
      this.dateadded = book.dateadded;
      this.dateread = book.dateread;
      this.price = book.price;
      this.rate = book.rate;
      this.description = book.description;
      this.imageUrl = book.imageUrl;
    })
  }

}
