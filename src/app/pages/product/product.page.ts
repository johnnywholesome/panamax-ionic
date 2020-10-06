import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScreenSizeService } from '../../services/screen-size.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  isDesktop: Observable<boolean> = this.screenSizeService.isDesktopView();
  constructor(private screenSizeService: ScreenSizeService) { }

  ngOnInit() {
  }

}
