import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from '../store/models/tutorial.model';
import { AppState } from '../store/app.state';
import * as TutorialActions from '../store/actions/tutorial.action';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  // Section 1
  tutorials: Observable<Tutorial[]>;

  // Section 2
  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  ngOnInit() { }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index))
  }
}