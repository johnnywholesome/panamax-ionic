import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPage } from './web.page';

const routes: Routes = [
  {
    path: '',
    component: WebPage,
    children: [
      {
        path: '',
        redirectTo: 'lists',
        pathMatch: 'full'
      },
      {
        path: 'lists',
        loadChildren: () => import('../lists/lists.module').then( m => m.ListsPageModule)
      },
      {
        path: 'lists/:listId/groups',
        loadChildren: () => import('../groups/groups.module').then( m => m.GroupsPageModule)
      },
      {
        path: 'lists/:listId/groups/:groupId',
        loadChildren: () => import('../products/products.module').then( m => m.ProductsPageModule)
      },
      {
        path: 'lists/:listId/groups/:groupId/products/:productId',
        loadChildren: () => import('../product/product.module').then( m => m.ProductPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPageRoutingModule {}
