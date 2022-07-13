import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


// C:\dev\ionic\photo-gallery\src\app\components\tabs\tabs.module.ts
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/components/tabs/tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
