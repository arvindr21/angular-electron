import 'reflect-metadata';
import '../polyfills';

import { HttpClient, HttpClientModule } from '@angular/common/http';
// NG Translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { DatastoreService } from './core/services/datastore/datastore.service';
import { DetailModule } from './detail/detail.module';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HomeModule,
    DetailModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [DatastoreService],
  bootstrap: [AppComponent]
})
export class AppModule {}
