import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<firebase.User>
  authenticated: boolean = false;
  constructor(public afAuth: AngularFireAuth, private as: AuthService, private router: Router) {
    afAuth.authState.subscribe(auth => {
      if (auth != null) {
        this.user = afAuth.authState;
        this.authenticated = true;
      }
    })
  }

  ngOnInit() {
  }
  login() {
    // this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.as.login();
    this.authenticated = true;
    // this.router.navigate(['books'])
  }
  logout() {
    this.afAuth.auth.signOut();
    this.authenticated = false;
  }
}
