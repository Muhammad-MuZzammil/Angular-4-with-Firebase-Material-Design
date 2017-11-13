import { environment } from './../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Forms
import { FormsModule } from '@angular/forms';

// MAterial Design Module
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatListModule,
  MatIconModule
} from '@angular/material';

// Routes
import { Router, RouterModule, Routes } from '@angular/router';

// firebase Configuration with angularfire2
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Services
import { FirebaseService } from './services/firebase.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';

const appRouter: Routes = [
  { path: "", component: HomeComponent },
  { path: "books", component: BooksComponent },
  { path: "book/:id", component: BookComponent },
  { path: "add-book", component: AddBookComponent },
  { path: "edit-book/:id", component: EditBookComponent },
  { path: "delete-book/:id", component: DeleteBookComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouter),
    AngularFireModule.initializeApp(environment.firebase, 'book-notes-app'),
    AngularFireDatabaseModule,
    MatButtonModule,MatCheckboxModule,MatCardModule, MatGridListModule,
    MatInputModule, MatDatepickerModule,MatNativeDateModule,MatToolbarModule,
    MatProgressSpinnerModule,MatTabsModule,MatListModule,MatIconModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
