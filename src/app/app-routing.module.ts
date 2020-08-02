import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  {
    path: 'app1',
    loadChildren: () => import('../../projects/app1/src/app/app-shared.module').then( module => module.AppSharedModule )
  },
  {
    path: 'app2',
    loadChildren: () => import('../../projects/app2/src/app/app-shared.module').then( module => module.AppSharedModule)
  },
  
];

@NgModule( {
  imports: [
    RouterModule.forRoot(
      routes
     
    )
  ],
  exports: [RouterModule]
} )
export class AppRoutingModule {
}
