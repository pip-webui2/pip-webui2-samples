import * as _ from 'lodash';
import { Component } from '@angular/core';
import { PipSidenavService, PipMediaService, MediaMainChange, PipRightnavService } from 'pip-webui2-layouts';

import { PipThemesService, Theme } from 'pip-webui2-themes';
import { PipPartService } from 'pip-webui2-controls';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public tiles: any[] = [
      { colorClass: 'color1', icon: 'keyboard', title: 'Behaviors', route: 'behaviors' },
      { colorClass: 'color4', icon: 'crop_16_9', title: 'Buttons', route: 'buttons' },
      { colorClass: 'color3', icon: 'layers', title: 'Composite ', route: 'composite' },
      { colorClass: 'color2', icon: 'touch_app', title: 'Basic controls ', route: 'controls' },
      { colorClass: 'color5', icon: 'date_range', title: 'Dates ', route: 'dates' },
      { colorClass: 'color3', icon: 'insert_drive_file', title: 'Documents', route: 'documents' },
      { colorClass: 'color1', icon: 'info', title: 'Landing', route: 'landing' },
      { colorClass: 'color4', icon: 'dashboard', title: 'Layouts', route: 'layouts' },
      { colorClass: 'color3', icon: 'place', title: 'Locations', route: 'locations' },
      { colorClass: 'color2', icon: 'explore', title: 'Nav', route: 'nav' },
      { colorClass: 'color5', icon: 'insert_photo', title: 'Pictures', route: 'pictures' },
      { colorClass: 'color3', icon: 'format_paint', title: 'Themes', route: 'themes' }
  ];

  constructor(
    private sidenav: PipSidenavService,
    private rightnav: PipRightnavService,
    private mainMedia: PipMediaService,
    private themesService: PipThemesService,
    private partService: PipPartService
  ) {
      this.sidenav.active = false;
  }
   
}
