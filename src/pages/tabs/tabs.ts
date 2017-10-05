import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ListPage;
  tab3Root: any = ContactPage;

  mySelectedIndex: number;

  constructor(public navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}