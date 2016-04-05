import {Component} from 'angular2/core';
import {Chatsocket} from './../chatsocket/chatsocket'


@Component({
  selector: 'user',
  templateUrl: 'app/user/user.html',
  styleUrls: ['app/user/user.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class User {
  user:any;

  constructor(public chat:Chatsocket) {
    chat.user.subscribe((user) => this.user = user);
  }

}
