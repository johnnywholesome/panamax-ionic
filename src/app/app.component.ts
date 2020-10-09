import { Component, HostListener } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenSizeService } from './services/screen-size.service';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError, Event } from '@angular/router';
import { Observable } from 'rxjs';
import { Deploy } from 'cordova-plugin-ionic/dist/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  url = '';
  isDesktop: Observable<boolean> = this.screenSizeService.isDesktopView();
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private screenSizeService: ScreenSizeService,
    private router: Router,
    private route: ActivatedRoute,
    private deploy: Deploy
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
          // Show loading indicator
          this.url = event.url;
      }

      if (event instanceof NavigationEnd) {
          // Hide loading indicator
          this.url = event.urlAfterRedirects;
      }

      if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user

      }
    });

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.screenSizeService.onResize(this.platform.width());
    });

    this.screenSizeService.isDesktopView().subscribe(isDesktop => {
      if (isDesktop) {
        this.router.navigateByUrl(this.url.replace('mobile', 'web'));
      } else {
        this.router.navigateByUrl(this.url.replace('web', 'mobile'));
      }
    });

    this.changeToDataChannel();
  }

  async changeToDevelopmentChannel() {
    await this.deploy.configure({channel: 'Development'});
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    this.screenSizeService.onResize(event.target.innerWidth);
  }

  async changeToDataChannel() {
    await this.deploy.configure({channel: 'Developer'});
  }
}
