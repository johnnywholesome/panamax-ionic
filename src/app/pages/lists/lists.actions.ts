import { createAction, props } from '@ngrx/store';
import { List } from './model/list.model';
export const loadLists = createAction(
    '[Home Page] Load Lists',
    props<{lists: List[]}>()
);
