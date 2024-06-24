import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import locale from '@angular/common/locales/fa';
import { BrowserModule, Title } from '@angular/platform-browser';
import { TitleStrategy } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import dayjs from 'dayjs/esm';
import {NgbDateAdapter, NgbDatepickerConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ApplicationConfigService } from 'app/core/config/application-config.service';
import './config/dayjs';
import { TranslationModule } from 'app/shared/language/translation.module';
import { httpInterceptorProviders } from 'app/core/interceptor/index';
import FindLanguageFromKeyPipe from 'app/shared/language/find-language-from-key.pipe';
import { AppRoutingModule } from './app-routing.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { NgbDateDayjsAdapter } from './config/datepicker-adapter';
import { fontAwesomeIcons } from './config/font-awesome-icons';
import MainComponent from './layouts/main/main.component';
import MainModule from './layouts/main/main.module';
import { AppPageTitleStrategy } from './app-page-title-strategy';
import {LayoutModule} from "./metronic/_metronic/layout";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TranslateModule} from "@ngx-translate/core";
import {ClipboardModule} from "ngx-clipboard";
import {InlineSVGModule} from "ng-inline-svg-2";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";

@NgModule({
  imports: [
    LayoutModule,
    BrowserModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AppRoutingModule,
    // Set this to true to enable service worker (PWA)
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: false }),
    HttpClientModule,
    MainModule,
    TranslationModule,




    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    ClipboardModule,

    AppRoutingModule,
    InlineSVGModule.forRoot(),
    NgbModule,
    SweetAlert2Module.forRoot(),



  ],
  providers: [
    Title,
    { provide: LOCALE_ID, useValue: 'fa' },
    { provide: NgbDateAdapter, useClass: NgbDateDayjsAdapter },
    FindLanguageFromKeyPipe,
    httpInterceptorProviders,
    { provide: TitleStrategy, useClass: AppPageTitleStrategy },
  ],
  bootstrap: [MainComponent],
})
export class AppModule {
  constructor(applicationConfigService: ApplicationConfigService, iconLibrary: FaIconLibrary, dpConfig: NgbDatepickerConfig) {
    applicationConfigService.setEndpointPrefix(SERVER_API_URL);
    registerLocaleData(locale);
    iconLibrary.addIcons(...fontAwesomeIcons);
    dpConfig.minDate = { year: dayjs().subtract(100, 'year').year(), month: 1, day: 1 };
  }
}
