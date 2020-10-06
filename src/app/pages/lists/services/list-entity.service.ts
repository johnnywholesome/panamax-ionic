import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { List } from '../model/list.model';
import { CourseEntityService } from '../../../../../../ngrx-tuts/ngrx-course/src/app/courses/services/course-entity.service';

@Injectable()
export class ListEntityService extends EntityCollectionServiceBase<List>{
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('List', serviceElementsFactory);
    }
}
