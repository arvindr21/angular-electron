import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DetailComponent],
  imports: [CommonModule, SharedModule, DetailRoutingModule,NgZorroAntdModule,FormsModule, ReactiveFormsModule]
})
export class DetailModule {}
