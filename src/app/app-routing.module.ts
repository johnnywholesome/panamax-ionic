import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mobile',
    pathMatch: 'full'
  },
  {
    path: 'web',
    loadChildren: () => import('./pages/web/web.module').then( m => m.WebPageModule)
  },
  {
    path: 'mobile',
    loadChildren: () => import('./pages/mobile/mobile.module').then( m => m.MobilePageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then( m => m.ProductPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
