import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';
import {Chatsocket} from './chatsocket/chatsocket'
import {Members} from './members/members'
import {Messages} from './messages/messages'
import {SendMessage} from './send-message/send-message'
import {User} from './user/user'

@Component({
    selector: 'chat-app',
    providers: [ROUTER_PROVIDERS, Chatsocket],
    templateUrl: 'app/chat.html',
    directives: [ROUTER_DIRECTIVES, Members, Messages, SendMessage, User],
    pipes: []
})
@RouteConfig([].concat(CliRouteConfig))

export class ChatApp {}
