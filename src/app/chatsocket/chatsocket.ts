import {Injectable} from 'angular2/core';
import 'vendor/socket.io-client/socket.io.js';
import {Subject} from 'rxjs/Subject';

// TODO: Import it correct via import
declare var io:any;


@Injectable()
export class Chatsocket {

    private socket = io('jscn-chat.herokuapp.com');
    public messages:Subject<string> = new Subject<string>();
    public members:Subject<string[]> = new Subject<string[]>();
    public user:Subject<any> = new Subject<any>();


    constructor() {
        this.registerForActions();
        this.updateMyUserData();
        this.registerForUsers();
    }


    registerForUsers() {
        this.socket.on('RECEIVE_USER', (incomingMessage)=> {
            this.user.next(incomingMessage.user);
        });
    }

    registerForActions() {
        this.socket.on('action', (incomingMessage) => {
            if (incomingMessage.type === 'RECEIVE_MESSAGE') {
                this.messages.next(incomingMessage.message.text);
            }
            if (incomingMessage.type === 'RECEIVE_MEMBERS') {
                this.members.next(incomingMessage.members);
            }
            if (incomingMessage.type === 'RECEIVE_USER') {
                this.user.next(incomingMessage.user);
            }
        });
    }

    updateMyUserData() {
        this.socket.emit('UPDATE_USER', {user: {username: 'Robin'}});
    }

    sendMessage(message:string) {
        this.socket.emit('CREATE_MESSAGE', {message: {text: message}});
    }

}
