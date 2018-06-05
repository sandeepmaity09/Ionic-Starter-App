import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertPage } from '../alert/alert';
import { ActionsheetPage } from '../actionsheet/actionsheet';

@Component({
    selector: 'page-test',
    templateUrl: 'test.html'
})
export class TestPage {

    constructor(public navCtrl: NavController) {

    }

    pages: any[] = [
        {
            title: "Aleat Box",
            component: AlertPage
        },
        {
            title: "Action Sheet",
            component: ActionsheetPage
        }
    ]

    showPage(p) {
        this.navCtrl.push(p.component);
    }
}
