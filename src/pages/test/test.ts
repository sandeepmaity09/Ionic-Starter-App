import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-test',
    templateUrl: 'test.html'
})
export class TestPage {

    constructor(public navCtrl: NavController) {

    }

    // items: Array<{ title: string, note: string, icons: string }>

    items = [
        "Apple",
        "Banana",
        "Cake",
        "Donut",
        "Egg",
        "Fruits",
        "Guava",
        "Hen",
        "Ink"
    ]
}
