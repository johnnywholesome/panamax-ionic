import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  private isDesktop = new BehaviorSubject<boolean>(true);
  constructor() { }

  onResize(size) {
    if (size > 600) {
      this.isDesktop.next(true);
    } else {
      this.isDesktop.next(false);
    }
  }

  isDesktopView(): Observable<boolean> {
    return this.isDesktop.asObservable().pipe(distinctUntilChanged());
  }
}
