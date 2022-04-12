import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { Book } from "../../models/books.model";

export const counter = createSelector(
    (state: AppState) => state.count,
    (count: number) => count
);

// export const selectCollectionState = createFeatureSelector<
//     AppState,
//     ReadonlyArray<string>
// >("collection");

// export const selectBookCollection = createSelector(
//     selectBooks,
//     selectCollectionState,
//     (books: Array<Book>, collection: Array<string>) => {
//         return collection.map((id) => books.find((book) => book.id === id));
//     }
// );