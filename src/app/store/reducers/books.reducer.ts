import { createReducer, on, Action } from '@ngrx/store';

import { retrievedBookList } from '../actions/books.actions';
import { Book } from '../../models/books.model';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
    initialState,
    on(retrievedBookList, (state, { books }) => [...books])
);