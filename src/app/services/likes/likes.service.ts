import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  Liked: Array<User> = [];

  constructor() { }

  addToLikeList(likedPeron: User) {
    this.Liked.push(likedPeron);
  }

  getLiked() {
    return this.Liked;
  }

  ClearAll() {
    this.Liked.length = 0;
    return this.Liked;
  }

  removePerson(email: string) {
    console.log(email);
    var index = this.Liked.findIndex((t: any) => { t.email == email });
    console.log(index);
    if (index = -1) {
      this.Liked.splice(index, 1);
    }
  }

  likeListLength() {
    return this.Liked.length;
  }
}
