import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Tutorial } from '../store/models/tutorial.model'
import * as TutorialActions from '../store/actions/tutorial.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addTutorial(name: any, url: any) {
    this.store.dispatch(new TutorialActions.AddTutorial({ name: name, url: url }))
  }

  ngOnInit() {
  }

}
