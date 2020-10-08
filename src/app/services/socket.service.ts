import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { List } from '../pages/lists/model/list.model';

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

  getListsChanges(): Observable<List> {
    return this.socket.fromEvent('listsUpdated');
  }

  getListCreated(): Observable<List> {
    return this.socket.fromEvent('listCreated');
  }
}
