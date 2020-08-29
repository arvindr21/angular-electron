import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'detail/:id',
    component: DetailComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule {}
