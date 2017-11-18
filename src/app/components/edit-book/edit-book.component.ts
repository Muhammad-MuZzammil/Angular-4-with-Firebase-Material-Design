import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  id: any;
  title;
  author;
  price;
  dateadded;
  dateread;
  description;
  rate;
  imageUrl;
  constructor(private firebaseService: FirebaseService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id'];
    this.firebaseService.getBookDetails(this.id).subscribe(book => {
      this.title = book.title;
      this.author = book.author;
      this.price = book.price;
      this.dateadded = new Date(book.dateadded);
      this.dateread = new Date(book.dateread);
      this.description = book.description;
      this.rate = book.rate;
      this.imageUrl = book.imageUrl
    })
  }
  updateDateAdded(dateadded) {
    this.dateadded = this.firebaseService.formatDate(dateadded);
  }
  updateDateRead(dateread) {
    this.dateread = this.firebaseService.formatDate(dateread);
  }

  submitEdit() {
    let book = {
      title: this.title,
      author: this.author,
      price: this.price,
      dateadded: this.dateadded,
      dateread: this.dateread,
      description: this.description,
      rate: this.rate,
      image: this.imageUrl
    }
    this.firebaseService.updateBook(this.id, book);
    this.router.navigate(['books']);
  }

}
