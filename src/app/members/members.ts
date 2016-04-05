import {Component} from 'angular2/core';
import {Chatsocket} from './../chatsocket/chatsocket'


@Component({
    selector: 'members',
    templateUrl: 'app/members/members.html',
    styleUrls: ['app/members/members.css'],
    providers: [],
    directives: [],
    pipes: []
})
export class Members {

    members:string[] = [];

    constructor(public chat:Chatsocket) {
        chat.members.subscribe((members) => this.members = members);
    }

}
