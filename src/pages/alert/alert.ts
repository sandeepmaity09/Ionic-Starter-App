import { Component } from '@angular/core';
import { NavController, AlertController, Alert } from 'ionic-angular';
// import {} from 'ionic-angular';

@Component({
    selector: 'page-alert',
    templateUrl: 'alert.html'
})
export class AlertPage {

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    }

    showAlert() {
        let alert = this.alertCtrl.create({
            title: "New Friend",
            message: "You new friend, Just Approved",
            buttons: ["OK"]
        });
        alert.present();
    }
}
