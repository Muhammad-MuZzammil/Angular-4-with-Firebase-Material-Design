import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courseTitle = "Books Notes"
  // favourite books
  favouriteBooks: any;
  unreadBooks: any;

  constructor(private firebaseService: FirebaseService) { }

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
