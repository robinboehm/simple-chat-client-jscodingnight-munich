import {Component} from 'angular2/core';
import {Chatsocket} from './../chatsocket/chatsocket'


@Component({
  selector: 'send-message',
  templateUrl: 'app/send-message/send-message.html',
  styleUrls: ['app/send-message/send-message.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class SendMessage {

  constructor(public chat:Chatsocket) {}

  sendMessage(message:string) {
    this.chat.sendMessage(message);
  }

}
