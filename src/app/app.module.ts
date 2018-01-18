import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AutoMenuComponent } from '../components/auto-menu/auto-menu';
import { AutoInputComponent } from '../components/auto-input/auto-input';
import { AutoTextareaComponent } from '../components/auto-textarea/auto-textarea';
import { AutoDateComponent } from '../components/auto-date/auto-date';
import { AutoSelectComponent } from '../components/auto-select/auto-select';
import { AutoDuoselectComponent } from '../components/auto-duoselect/auto-duoselect';
import { AutoCheckComponent } from '../components/auto-check/auto-check';
import { AutoChecklistComponent } from '../components/auto-checklist/auto-checklist';
import { AutoRadioComponent } from '../components/auto-radio/auto-radio';
import { AutoFormComponent } from '../components/auto-form/auto-form';
import { AutoGridComponent } from '../components/auto-grid/auto-grid';

import { HomePage } from '../pages/home/home';
import { ErrorPage } from '../pages/error/error';
import { MainmenuPage } from '../pages/mainmenu/mainmenu';
import { OnlinePage } from '../pages/online/online';
import { DynamicPage } from '../pages/dynamic/dynamic';
import { ContainerPage } from '../pages/container/container';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BridgeProvider } from '../providers/bridge/bridge';

import { TooltipsModule } from 'ionic-tooltips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ServicesProvider } from '../providers/services/services';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ErrorPage,
    MainmenuPage,
    OnlinePage,
    DynamicPage,
    ContainerPage,
    AutoMenuComponent,
    AutoInputComponent,
    AutoTextareaComponent,
    AutoDateComponent,
    AutoSelectComponent,
    AutoDuoselectComponent,
    AutoCheckComponent,
    AutoChecklistComponent,
    AutoRadioComponent,
    AutoFormComponent,
    AutoGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    TooltipsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    MatInputModule, MatProgressSpinnerModule, MatCardModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ErrorPage,
    MainmenuPage,
    OnlinePage,
    DynamicPage,
    ContainerPage,
    AutoMenuComponent,
    AutoInputComponent,
    AutoTextareaComponent,
    AutoDateComponent,
    AutoSelectComponent,
    AutoDuoselectComponent,
    AutoCheckComponent,
    AutoChecklistComponent,
    AutoRadioComponent,
    AutoFormComponent,
    AutoGridComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BridgeProvider,
    ServicesProvider
  ]
})
export class AppModule {}
