import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AtendimentoService } from '../services/domain/atendimento.service';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptor';
import { AtendimentosPage } from '../pages/atendimentos/atendimentos';
import { ListarPage } from '../pages/listar/listar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AtendimentosPage,
    ListarPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AtendimentosPage,
    ListarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AtendimentoService,
    ErrorInterceptorProvider
  ]
})
export class AppModule {}
