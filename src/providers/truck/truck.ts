import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Truck {
  trucks: any;
  constructor(public http: Http) {
    this.trucks = [
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },
      { pic: 'assets/images/truck.png', price: '23,000', name: '2015 Rosenbauer Commander 4000 Demo Rescue Pumper', brand: 'Hale', pump: '1500 GPM', tank: '1000 Gallon', category: 'used pumpers and engines', mileage: 'under 15000', region: 'North-west USA', warranty: 'Truck with warranty' },

    ]
  }

  filterItems(searchTerm) {

    return this.trucks.filter((truck) => {
      return truck.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

}
