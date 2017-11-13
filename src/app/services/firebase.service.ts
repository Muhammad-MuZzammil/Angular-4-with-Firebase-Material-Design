import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
  books: FirebaseListObservable<any[]>;  // from Firebase
  favouiteBooks: Observable<any>;
  unreadBooks: Observable<any>;
  bookDetails: Observable<any>;
  constructor(private afDB: AngularFireDatabase) { }

  getBooks() {
    this.books = this.afDB.list('/books') as FirebaseListObservable<any[]>;
    return this.books;
  }
  getFavouriteBooks() {
    this.favouiteBooks = this.afDB.list('/books').map(books => {
      const topRatedBooks = books.filter(item => item['rate'] > 4)
      return topRatedBooks
    });
    return this.favouiteBooks
  }
  getUnreadBooks() {
    this.unreadBooks = this.afDB.list('/books').map(books => {
      const ub = books.filter(item => item['dateread'] == null)
      return ub;
    })
    return this.unreadBooks;
  }
  getBookDetails(id) {
    this.bookDetails = this.afDB.object('/books/' + id) as Observable<any>;
    return this.bookDetails;
  }
}
