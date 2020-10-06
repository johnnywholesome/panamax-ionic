import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { List } from '../model/list.model';

@Injectable()
export class ListEntityService extends EntityCollectionServiceBase<List>{
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('List', serviceElementsFactory);
    }
}
