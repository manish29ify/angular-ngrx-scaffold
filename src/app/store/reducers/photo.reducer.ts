import { createReducer, on } from '@ngrx/store';
import { loadPhotosSuccess, updatePhotoSuccess } from '../actions/photo.actions';
import { Photo } from '../../models/photo.model';

// export interface PhotoState {
//   [id: string]: Photo;
// }

export const photoFeatureKey = 'photo';

// export interface PhotoRootState {
//   [photoFeatureKey]: PhotoState;
// }

// const initialState: PhotoState = {};

export const initialState: ReadonlyArray<Photo> = [];

export const photoReducer = createReducer(
  initialState,
  on(loadPhotosSuccess, (state, { photos }) => [...photos]),
  on(updatePhotoSuccess, (state, { photo }) => ({
    ...state,
    [photo.id]: photo
  }))
);



// export const photoReducer = createReducer(
//   initialState,
//   on(updatePhotoSuccess, (state, { photo }) => ({
//     ...state,
//     [photo.id]: photo
//   })),
//   on(loadPhotosSuccess, (state, {photos}) => [...photos]),
//   // on(loadPhotosSuccess, (state, { photos }) => photos.reduce((acc, photo) => ({
//   //   ...acc,
//   //   [photo.id]: photo
//   // })
//   {}))
// );


// import { createReducer, on, Action } from '@ngrx/store';

// import { retrievedBookList } from '../actions/books.actions';
// import { Book } from '../../models/books.model';

// export const initialState: ReadonlyArray<Book> = [];

// export const booksReducer = createReducer(
//   initialState,
//   on(retrievedBookList, (state, { Book }) => [...Book])
// );
