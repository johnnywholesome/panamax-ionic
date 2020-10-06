import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from '../../services/screen-size.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.page.html',
  styleUrls: ['./mobile.page.scss'],
})
export class MobilePage implements OnInit {
  isDesktop: Observable<boolean> = this.screenSizeService.isDesktopView();
  constructor(private screenSizeService: ScreenSizeService) { }

  ngOnInit() {
  }

}
