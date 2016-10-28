import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialControlsComponent } from './features/test/material-controls.component';

const routes: Routes = [
  { path: '', redirectTo: '/material-controls', pathMatch: 'full' },
  { path: 'material-controls',  component: MaterialControlsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
