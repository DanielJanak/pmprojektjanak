import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tab1',
    pathMatch: 'full'
    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'tab1',
    loadChildren: () =>
     import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },

  {
    path: 'tab1/:name',
    loadChildren: () =>
     import('./pages/favourite/favourite.module').then(
      (m) => m.FavouritePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
