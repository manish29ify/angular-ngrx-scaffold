import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers/counter.reducer';
import { booksReducer } from './store/reducers/books.reducer';
import { collectionReducer } from './store/reducers/collection.reducer';
import { PhotoEffects } from './store/effects/photo.effects';
import { BookEffects } from './store/effects/book.effects'

import { ApiModule } from './services/api.module';
import { PhotoModule } from './photo/photo.module'
import { ScoreboardModule } from './scoreboard/scoreboard.module';
import { EffectsModule } from '@ngrx/effects';
import { photoReducer } from './store/reducers/photo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer, books: booksReducer, collection: collectionReducer, photo: photoReducer }, {}),
    ApiModule,
    BrowserAnimationsModule,
    ScoreboardModule,
    PhotoModule,
    EffectsModule.forRoot([PhotoEffects, BookEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    // StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
