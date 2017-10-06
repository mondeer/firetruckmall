import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ExpandableHeaderComponent } from '../components/expandable-header/expandable-header';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { IonicStorageModule } from '@ionic/storage';

import { CallNumber } from '@ionic-native/call-number';

import { BmfaApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { AccountPage } from '../pages/account/account';
import { SupportPage } from '../pages/support/support';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { PopoverPage } from '../pages/about-popover/about-popover';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Truck } from '../providers/truck/truck';
import { UserData } from '../providers/user-data/user-data';

@NgModule({
  declarations: [
    BmfaApp,
    HomePage,
    ListPage,
    ExpandableHeaderComponent,
    TabsPage,
    ContactPage,
    LoginPage,
    SignupPage,
    AboutusPage,
    SupportPage,
    TutorialPage,
    AccountPage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(BmfaApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: HomePage, name: 'Home', segment: 'home' },
        { component: ListPage, name: 'ListPage', segment: 'list' },
        { component: AboutusPage, name: 'Aboutus', segment: 'about' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BmfaApp,
    HomePage,
    ListPage,
    TabsPage,
    ContactPage,
    LoginPage,
    SignupPage,
    AboutusPage,
    SupportPage,
    TutorialPage,
    AccountPage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Truck,
    UserData
  ]
})
export class AppModule {}
