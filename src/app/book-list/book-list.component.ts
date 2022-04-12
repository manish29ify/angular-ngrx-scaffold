import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../models/books.model';
import { counter } from '../store/selectors/counter.selector';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  @Input() books: Array<Book>;
  @Output() add = new EventEmitter();
  count$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = this.store.pipe(select(counter));
  }
}