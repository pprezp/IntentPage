import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSlideToggleModule
  ],
  bootstrap:[HomeComponent]
})
export class HomeModule { }
