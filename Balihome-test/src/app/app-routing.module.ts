import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ReposComponent } from './repos/repos.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: '*', component: MainComponent },
  {
    path: 'repos',
    component: ReposComponent,
    children: [{ path: ':id', component: ReposComponent }]
  },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
