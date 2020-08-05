import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSnapshotchangesComponent } from './components/list-snapshotchanges/list-snapshotchanges.component';
import { FormPersonComponent } from './components/form-person/form-person.component';
import { ListValuechangesComponent } from './components/list-valuechanges/list-valuechanges.component';

const routes: Routes = [
  {
    path: 'snapshot-changes',
    component: ListSnapshotchangesComponent,
    children: [
      {
        path: '',
        component: FormPersonComponent
      }
    ]
  },
  {
    path: 'value-changes',
    component: ListValuechangesComponent,
    children: [
      {
        path: '',
        component: FormPersonComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
