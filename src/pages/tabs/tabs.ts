import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SupportPage } from '../support/support';
import { ContactPage } from '../contact/contact';
import { AboutusPage } from '../aboutus/aboutus';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = SupportPage;
  tab3Root: any = ContactPage;
  tab4Root: any = AboutusPage;

  mySelectedIndex: number;

  constructor(public navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}