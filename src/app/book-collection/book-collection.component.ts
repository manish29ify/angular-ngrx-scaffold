import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../models/books.model';
import { counter } from '../store/selectors/counter.selector';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss'],
})
export class BookCollectionComponent {
  @Input() books: Array<Book>;
  @Output() remove = new EventEmitter();

  count$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = this.store.pipe(select(counter));
  }
}