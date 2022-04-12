import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-photo',
  template: `
  <div class="card " style="width: 18rem;" *ngIf="photo">
  <img class="card-img-top" [src]="photo.url" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{photo.title}}</h5>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  

  `,
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnChanges {

  @Input() photo?: Photo;

  @Output() like = new EventEmitter<string>();
  @Output() dislike = new EventEmitter<string>();


  ngOnChanges(changes: SimpleChanges): void {
    // console.log("ngOnChanges", changes);

    // throw new Error('Method not implemented.');
  }
  onLike(id: string): void {
    this.like.next(id);
  }

  onDislike(id: string): void {
    this.dislike.next(id);
  }
}
