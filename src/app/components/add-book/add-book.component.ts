import { Router } from '@angular/router';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  author;
  title;
  price;
  dateadded;
  dateread;
  description;
  imageUrl;
  rate;

  isRead: boolean = false;
  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
  }
  submitAdd() {
    let book = {
      author: this.author,
      title: this.title,
      price: this.price,
      dateadded: this.dateadded,
      dateread: this.dateread,
      description: this.description,
      imageUrl: this.imageUrl,
      rate: this.rate
    }
    this.firebaseService.addBook(book);
    this.router.navigate(['books']);
  }
  updateDateAdded(dateadded) {
    this.dateadded = this.firebaseService.formatDate(dateadded);
  }
  updateDateRead(dateread) {
    this.dateread = this.firebaseService.formatDate(dateread);
    this.isRead = true;
  }
}
