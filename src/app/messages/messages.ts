import {Component} from 'angular2/core';
import {Chatsocket} from './../chatsocket/chatsocket'


@Component({
  selector: 'messages',
  templateUrl: 'app/messages/messages.html',
  styleUrls: ['app/messages/messages.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class Messages {

  messages: string[] = [];

  constructor(public chat:Chatsocket) {
    chat.messages.subscribe((message) => this.messages.push(message));
  }

}
