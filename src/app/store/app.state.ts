import { Book } from '../models/books.model';
import { Photo } from '../models/photo.model';

export interface AppState {
    photo: ReadonlyArray<Photo>;
    count: Readonly<number>;
    books: ReadonlyArray<Book>;
    collection: ReadonlyArray<string>;
}
