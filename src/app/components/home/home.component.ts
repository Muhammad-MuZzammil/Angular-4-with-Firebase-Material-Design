import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Authentication
  authenticated: boolean = false;
  user: Observable<firebase.User>;


  courseTitle = "Books Notes"
  // favourite books
  favouriteBooks: any;
  unreadBooks: any;

  constructor(private firebaseService: FirebaseService, public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(auth => {
      if (auth != null) {
        this.user = afAuth.authState;
        this.authenticated = true;
      }
    })
  }

  ngOnInit() {
    this.firebaseService.getFavouriteBooks().subscribe(favBooks => {
      this.favouriteBooks = favBooks;
      console.log(this.favouriteBooks)
    })

    this.firebaseService.getUnreadBooks().subscribe(ubBooks => {

      this.unreadBooks = ubBooks;
      console.log("Unread Books", this.unreadBooks);
    })
  }

}
