import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsPage } from './lists.page';
import { ListsResolver } from './services/lists-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ListsPage,
    // resolve: {
    //   lists: ListsResolver
    // }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsPageRoutingModule {}