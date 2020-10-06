import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from '../../services/screen-size.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

  isDesktop: Observable<boolean> = this.screenSizeService.isDesktopView();
  constructor(private screenSizeService: ScreenSizeService) { }

  ngOnInit() {
  }

}
