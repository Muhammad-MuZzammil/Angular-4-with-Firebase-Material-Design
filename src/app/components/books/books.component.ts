import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  allBooks: any;

  constructor(private firebaseSerivce: FirebaseService) {
  }

  ngOnInit() {
    this.firebaseSerivce.getBooks().subscribe(books => {
      this.allBooks = books;
    })
  }

}
