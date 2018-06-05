import { Component } from '@angular/core';
import { Platform, ActionSheetController, NavController } from 'ionic-angular';
// import {} from 'ionic-angular';

@Component({
    selector: 'page-actionsheet',
    templateUrl: 'actionsheet.html'
})

export class ActionsheetPage {

    constructor(public navCtrl: NavController, public platform: Platform, public actionSheetController: ActionSheetController) { }

    openMenu() {
        let actionSheet = this.actionSheetController.create({
            title: 'Albums',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: () => {
                        console.log('Delete Clicked');
                    }
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: () => {
                        console.log('Share Clicked');
                    }
                },
                {
                    text: 'Favourite',
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: () => {
                        console.log('Play Clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',  // will always sort to be on the bottom
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: () => {
                        console.log('Cancel Clicked');
                    }
                }
            ]
        })
        actionSheet.present();
    }
}
