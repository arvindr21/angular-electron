import { CommonModule } from '@angular/common';
import { DataStoreService } from './store/datastore.service';
import { FormsModule } from '@angular/forms';
import { LighthouseService } from "../tools/lighthouse.service";
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/';
import { TranslateModule } from '@ngx-translate/core';
import { WebviewDirective } from './directives/';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [TranslateModule, WebviewDirective, FormsModule],
  providers: [DataStoreService, LighthouseService]
})
export class SharedModule {}
