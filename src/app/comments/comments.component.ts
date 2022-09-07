import { Component, OnInit } from '@angular/core';
import { COMMENTS } from '../shared/mock-comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments = COMMENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
