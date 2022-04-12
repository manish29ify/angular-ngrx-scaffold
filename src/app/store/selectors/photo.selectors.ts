import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Photo } from "src/app/models/photo.model";
import { AppState } from "../app.state";
// import { photoFeatureKey } from '../reducers/photo.reducer';
// import { photoFeatureKey, PhotoRootState, PhotoState } from '../reducers/photo.reducer';

// const selectPhotoFeature = createFeatureSelector<PhotoRootState, PhotoState>(photoFeatureKey);

// export const selectPhotos = createSelector(selectPhotoFeature, state => Object.keys(state).map(key => state[key]));

// export const selectPhoto = createSelector(selectPhotoFeature, (state: PhotoState, props: { id: string }) => state[props.id]);

export const selectPhotos = createSelector(
    (state: AppState) => state.photo,
    (photo: Array<Photo>) => photo
);
