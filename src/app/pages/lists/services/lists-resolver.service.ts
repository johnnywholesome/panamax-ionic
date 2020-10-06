import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { ListEntityService } from './list-entity.service';
import { Observable } from 'rxjs';
import { tap, filter, first } from 'rxjs/operators';

@Injectable()
export class ListsResolver implements Resolve<boolean> {
    constructor(private listsService: ListEntityService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        return this.listsService.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                        this.listsService.getAll();
                    }
                }),
                filter(loaded => !!loaded),
                first()
            );
    }
}
