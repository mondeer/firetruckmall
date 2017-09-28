import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  trucks: any;

  constructor(public navCtrl: NavController) {
    this.trucks = [
      { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand:'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty'},
      { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand:'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty'},
      { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand:'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty'},
      { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand:'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty'},
      { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand:'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty'},
      { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand:'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty'},
            { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand:'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty'},
            { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
            { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
            { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
            { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
            { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
            { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand:'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty'},
      { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: '../../assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },

    ]
  }


}
