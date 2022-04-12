import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/models/books.model';

export const addBook = createAction(
    '[Book List] Add Book',
    props<{ bookId }>()
);

export const removeBook = createAction(
    '[Book Collection] Remove Book',
    props<{ bookId }>()
);

export const loadBooks = createAction('[Book List/API] Load Book');
export const retrievedBookList = createAction(
    '[Book List/API] Retrieve Books Success',
    props<{ books: Book[] }>()
);

export const loadBookError = createAction('[Book List/API] Load Books Error');