import { Component } from '@angular/core';
import { PipMediaService, PipSidenavService } from 'pip-webui2-layouts';

import { PipThemesService, Theme } from 'pip-webui2-themes';
import { PipNavService, NavHeaderConfig, PrimaryActionsConfig } from 'pip-webui2-nav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public primaryActions: PrimaryActionsConfig = new PrimaryActionsConfig();
  public navHeader: NavHeaderConfig = new NavHeaderConfig();

  constructor(
    private sidenav: PipSidenavService,
    public media: PipMediaService,
    private themesService: PipThemesService,
    private navService: PipNavService
  ) {
    media.activate();
    this.sidenav.active = false;
    this.primaryActions.actions = [];
    this.generatePrimaryActions();
    this.navService.showPrimaryActions(this.primaryActions);
  }

  private generatePrimaryActions() {
      let themes: Theme[] = this.themesService.themes;
      this.primaryActions.actions.push({
        icon: 'format_color_fill',
        subActions: []
      })

      for (let i = 0; i < themes.length; i++) {
        this.primaryActions.actions[0].subActions.push({
          title: themes[i].name,
          click: () => {
            this.setTheme(themes[i]);
          }
        })
      }
  }

  private setTheme(theme) {
    this.themesService.selectedTheme = theme;
  }
}
