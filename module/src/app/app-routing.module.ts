import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'placeholders', loadChildren:()=> import('./placeholders/placeholders.module').then(m =>m.PlaceholdersModule)},
  {path:'tables', loadChildren:()=> import('./tables/tables-routing.module').then(m =>m.TablesRoutingModule)},
  {path:'', component:HomeComponent},
  {path:'**', component:NotfoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
