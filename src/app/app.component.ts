import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './store/actions/counter.actions';

import { selectBookCollection, selectBooks } from './store/selectors/books.selector';
import { counter } from './store/selectors/counter.selector'
import {
  loadBooks,
  addBook,
  removeBook,
} from './store/actions/books.actions';
import { GoogleBooksService } from './services/books.service';
import { Photo } from './models/photo.model';
import { likePhoto, dislikePhoto, loadPhotos } from './store/actions/photo.actions';
import { selectPhotos } from './store/selectors/photo.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrxapp';
  count$: Observable<number>;

  books$; //= this.store.pipe(select(selectBooks));
  bookCollection$; // = this.store.pipe(select(selectBookCollection));
  photos$; // = this.store.select(selectPhotos);



  // constructor(private store: Store<{ count: number }>, private booksService: GoogleBooksService, private store1: Store) {
  constructor(private booksService: GoogleBooksService, private store: Store) {
    this.count$ = this.store.pipe(select(counter));
    //store.select('count');
    this.books$ = this.store.pipe(select(selectBooks));
    this.bookCollection$ = this.store.pipe(select(selectBookCollection));
    this.photos$ = this.store.pipe(select(selectPhotos));
    // this.count$.subscribe(console.log);
    // this.photos$.subscribe(data => console.log("Photos", data));
  }

  ngOnInit() {
    // this.booksService
    //   .getBooks()
    //   .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));

    this.store.dispatch(loadBooks());
    this.store.dispatch(loadPhotos());
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }


  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }



  /// FOR PHOTOS
  onLike(id: string): void {
    this.store.dispatch(likePhoto({ id }));
  }

  onDislike(id: string): void {
    this.store.dispatch(dislikePhoto({ id }));
  }

  trackById(index: number, item: Photo): string {
    return item.id;
  }
}