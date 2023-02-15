import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OktaAuth } from '@okta/okta-auth-js'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';
import { RegisterModule } from './modules/register/register.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    RegisterModule,
    DashboardModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [{
    provide: OktaAuth,
    useValue: new OktaAuth({
      issuer: 'https://dev-21598102.okta.com/oauth2/default',
      clientId: '0oa8cooavh6ABXZrW5d7',
    })
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
