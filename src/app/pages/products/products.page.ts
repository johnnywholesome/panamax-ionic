import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScreenSizeService } from '../../services/screen-size.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  isDesktop: Observable<boolean> = this.screenSizeService.isDesktopView();
  constructor(private screenSizeService: ScreenSizeService) { }

  ngOnInit() {
  }

}
