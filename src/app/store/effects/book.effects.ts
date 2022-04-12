import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GoogleBooksService, } from '../../services/books.service';
import { Injectable } from '@angular/core';
import * as bookAction from '../actions/books.actions';
import { catchError, delay, map, switchMap, exhaustMap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class BookEffects {

    loadPhotos$ = createEffect(() => this.actions$.pipe(
        ofType(bookAction.loadBooks),
        exhaustMap(() => this.booksService.getBooks().pipe(
            map(books => bookAction.retrievedBookList({ books })
            ),
            catchError(() => [bookAction.loadBookError()])
        ))
    )
    );




    constructor(private actions$: Actions, private booksService: GoogleBooksService,) {
    }
}
