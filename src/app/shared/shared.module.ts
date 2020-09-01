import { CommonModule } from '@angular/common';
import { DataStoreService } from './store/datastore.service';
import { FilmStripComponent } from './components/widgets/film-strip/film-strip.component';
import { FormsModule } from '@angular/forms';
import { LighthouseService } from "../tools/lighthouse.service";
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { PageNotFoundComponent } from './components/';
import { ScoresComponent } from './components/widgets/scores/scores.component';
import { TranslateModule } from '@ngx-translate/core';
import { WebviewDirective } from './directives/';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, ScoresComponent, FilmStripComponent],
  imports: [CommonModule, TranslateModule, FormsModule, NgZorroAntdModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, ScoresComponent, FilmStripComponent],
  providers: [DataStoreService, LighthouseService]
})
export class SharedModule {}
