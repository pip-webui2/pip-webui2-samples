import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { MatToolbarModule, MatListModule, MatButtonModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';

import { PipThemesModule } from 'pip-webui2-themes';

import { PipAppbarModule, PipRightnavModule, PipMediaModule, PipSidenavModule, PipMainLayoutModule, PipRootLayoutModule, PipSidenavExpanderModule, PipShadowModule } from 'pip-webui2-layouts';
import { PipBreadcrumbModule, PipNavIconModule, PipPrimaryActionsModule, PipSecondaryActionsModule, PipNavModule, PipNavHeaderModule, PipNavMenuModule } from 'pip-webui2-nav';
import { PipPartModule } from 'pip-webui2-controls';
import { PipPictureModule } from 'pip-webui2-pictures';

import { MainModule } from './main/main.module';
import { MainComponent } from './main/main.component';

import { PipPartDirective } from './part-name/part-name.directive';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: '', pathMatch: 'full', redirectTo: 'main' }
];

@NgModule({
  declarations: [
    AppComponent,
    PipPartDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,

    TranslateModule.forRoot(),

    PipThemesModule,

    PipAppbarModule,
    PipRightnavModule,
    PipMediaModule,
    PipSidenavModule,
    PipMainLayoutModule,
    PipRootLayoutModule,
    PipSidenavExpanderModule,
    PipShadowModule,

    PipBreadcrumbModule, 
    PipNavIconModule, 
    PipPrimaryActionsModule, 
    PipSecondaryActionsModule, 
    PipNavModule, 
    PipNavHeaderModule, 
    PipNavMenuModule,
    PipPartModule,
    PipPictureModule,

    MainModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
