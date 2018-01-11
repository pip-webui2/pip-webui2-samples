import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatToolbarModule, MatListModule, MatIconModule } from '@angular/material';

import { PipPictureModule } from 'pip-webui2-pictures';
import { PipScrollableModule, PipTilesLayoutModule, PipShadowModule } from 'pip-webui2-layouts';

import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,

    PipPictureModule,
    PipScrollableModule,
    PipTilesLayoutModule,
    PipShadowModule
  ],
  exports: [
    MainComponent
  ],
  providers: [ ],
})
export class MainModule { }