import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
    selector: 'page-promptalert',
    templateUrl: 'promptalert.html'
})
export class PromptAlertPage {

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    }

    showPrompt() {
        const prompt = this.alertCtrl.create({
            title: 'Login',
            message: 'Enter a name for this username',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: () => {
                        console.log('Saved clicked');
                    }
                }
            ]
        })
        prompt.present();
    }
}
