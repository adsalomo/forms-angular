import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { TemplatesComponent } from './pages/templates/templates.component';

const app_routes: Routes = [
  {
    path: 'template',
    component: TemplatesComponent,
  },
  {
    path: 'reactive',
    component: ReactiveComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'reactive',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }