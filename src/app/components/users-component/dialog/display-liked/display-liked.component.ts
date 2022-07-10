import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LikesService } from 'src/app/services/likes/likes.service';


@Component({
  selector: 'app-display-liked',
  templateUrl: './display-liked.component.html',
  styleUrls: ['./display-liked.component.css']
})
export class DisplayLikedComponent implements OnInit {

  People = this.like_service.getLiked();

  @Output() changeLikes = new EventEmitter<string>();

  constructor(private like_service: LikesService) { }

  ngOnInit(): void {
  }

  removePerson(email: string) {
    this.like_service.removePerson(email);
  }

  clearLiked() {
    this.like_service.ClearAll();
  }

}
