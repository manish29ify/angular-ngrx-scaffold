import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

import { StoreModule } from '@ngrx/store';
import * as fromScoreboard from '../store/reducers/scoreboard.reducer';



@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromScoreboard.scoreboardFeatureKey, fromScoreboard.reducer)
  ]
})
export class ScoreboardModule { }
