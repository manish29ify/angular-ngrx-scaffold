import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';

// import * as fromPhoto from '../store/reducers/photo.reducer'
// import { PhotoEffects } from '../store/effects/photo.effects'

@NgModule({
  declarations: [PhotoComponent],
  imports: [
    CommonModule,
    // StoreModule.forFeature(fromPhoto.photoFeatureKey, fromPhoto.photoReducer),
    // EffectsModule.forFeature([PhotoEffects])
  ],
  exports: [PhotoComponent]
})
export class PhotoModule { }
