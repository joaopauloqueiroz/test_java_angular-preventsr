import { SendArquiveComponent } from './components/send-arquive/send-arquive.component';
import { FilterIpComponent } from './components/filter-ip/filter-ip.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiltersComponent } from './components/filters/filters.component';

const routes: Routes = [
  {
    path: "", component: ListComponent,
  },
  {
    path: "create", component: CreateComponent,
  }, 
  {
    path: "list", component: ListComponent,
  },
  {
    path: "filters", component: FiltersComponent
  },
  {
    path: "filters-ip", component: FilterIpComponent
  },
  {
    path: "send-arquive", component: SendArquiveComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
