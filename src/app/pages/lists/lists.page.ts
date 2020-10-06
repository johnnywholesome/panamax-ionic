import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ScreenSizeService } from '../../services/screen-size.service';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {
  isDesktop: Observable<boolean> = this.screenSizeService.isDesktopView();
  constructor(private screenSizeService: ScreenSizeService, private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.joinListsGroup(1);
    this.socketService.getListsChanges().subscribe(list => console.log(list));
  }

}
