import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ScreenSizeService } from '../../services/screen-size.service';
import { SocketService } from '../../services/socket.service';
import { List } from './model/list.model';
import { ListEntityService } from './services/list-entity.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {
  lists$: Observable<List[]>;
  isDesktop: Observable<boolean> = this.screenSizeService.isDesktopView();


  constructor(
    private screenSizeService: ScreenSizeService,
    private socketService: SocketService,
    private listsService: ListEntityService
  ) { }

  ngOnInit() {
    this.lists$ = this.listsService.entities$;
    this.socketService.joinListsGroup(1);
    this.socketService.getListsChanges().subscribe(list => {
      this.listsService.updateOneInCache(list);
    });

    this.socketService.getListCreated().subscribe(list => {
      this.listsService.addOneToCache(list);
    });
  }

}
