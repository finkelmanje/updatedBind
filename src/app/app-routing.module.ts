import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'direct/:snake',
    loadChildren: () => import('./direct/direct.module').then( m => m.DirectPageModule)
  },
  
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
//   {
//     path: 'review-page',
//     loadChildren: () => import('./review-page/review-page.module').then( m => m.ReviewPagePageModule)
//   }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule {}
