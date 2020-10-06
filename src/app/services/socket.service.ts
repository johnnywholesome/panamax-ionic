import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }

  joinListsGroup(id) {
      this.socket.emit('joinListsRoom', id);
  }

  leaveListsGroup() {
      this.socket.emit('leaveListsRoom');
  }

  getListsChanges() {
    return this.socket.fromEvent('listsUpdated');
  }

//   addComment(votingId, message) {
//     this.socket.emit('comment', {
//       voting: votingId,
//       text: message,
//       user: 123
//     });
//   }

//   getChatMessages() {
//     return this.socket.fromEvent('comment');
//   }
}
