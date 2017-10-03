import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { CallNumber } from '@ionic-native/call-number';
import { Truck } from '../../providers/truck/truck';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  searchTerm: string = '';
  searchControl: FormControl;
  trucks: any;
  searching: any = false;

  constructor(public navCtrl: NavController, private callNumber: CallNumber, public truckService: Truck) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {

    this.setFilteredItems();

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

      this.searching = false;
      this.setFilteredItems();

    });


  }

  onSearchInput() {
    this.searching = true;
  }

  setFilteredItems() {

    this.trucks = this.truckService.filterItems(this.searchTerm);

  }

  launchDialer(n: string) {
    this.callNumber.callNumber(n, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

}
