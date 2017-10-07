import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, ViewController, App, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(
    public navCtrl: NavController,
    private callNumber: CallNumber,
    public viewCtrl: ViewController,
    public app: App,
    public modalCtrl: ModalController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  support() {
    this.app.getRootNav().push('SupportPage');
    this.viewCtrl.dismiss();
  }

  launchDialer(n: string) {
    this.callNumber.callNumber(n, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

}
