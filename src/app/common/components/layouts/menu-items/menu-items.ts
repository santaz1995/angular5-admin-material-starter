import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const menuItems = [
    {state: 'index', name: 'Index Page', type: 'link', icon: 'av_timer' },
    {state: 'project-skills', type: 'link', name: 'Project Skill', icon: 'crop_7_5'},
];

@Injectable()
export class MenuItems {

  /**
   * @returns {Menu[]}
   */
  static get menuItems(): Menu[] {
    return menuItems;
  }

}
