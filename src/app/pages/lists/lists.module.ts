import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListsPageRoutingModule } from './lists-routing.module';

import { ListsPage } from './lists.page';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { StoreModule } from '@ngrx/store';
import * as fromList from './reducers';
import { EntityMetadataMap, EntityDefinitionService, DefaultDataServiceConfig, EntityDataService } from '@ngrx/data';
import { ListEntityService } from './services/list-entity.service';
import { ListsResolver } from './services/lists-resolver.service';
import { ListsDataService } from './services/lists-data.service';

const entityMetaData: EntityMetadataMap = {
  List: {

  }
};

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://localhost:3000',
  timeout: 3000, // request timeout
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListsPageRoutingModule,
    SharedComponentsModule,
    StoreModule.forFeature(
      fromList.listFeatureKey,
      fromList.reducers
    )
  ],
  declarations: [ListsPage],
  providers: [ListEntityService, ListsResolver, ListsDataService]
})
export class ListsPageModule {
  constructor(private eds: EntityDefinitionService, private entityDataService: EntityDataService, private listsService: ListsDataService) {
    this.eds.registerMetadataMap(entityMetaData);
    this.entityDataService.registerService('List', listsService);
  }
}
