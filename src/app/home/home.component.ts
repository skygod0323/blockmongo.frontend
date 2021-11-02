/**
 * Created by ApolloYr on 4/4/2018.
 */
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {NotifyService} from "../services/notify.service";
import {MatDialog} from "@angular/material";
import {SignupModalComponent} from "../shared/modal/signup-modal/signup-modal.component";
import {Overlay} from "@angular/cdk/overlay";

@Component({
    templateUrl: './home.component.html',
    selector: 'page-home',
    styleUrls: ['./home.component.scss']
})
export class HomePage implements OnInit {
    constructor(
        public router: Router,
        public notify: NotifyService,
        public dialog: MatDialog,
        public overlay: Overlay
    ) {

    }

    ngOnInit() {

    }

    showSignup() {
        let dialogRef = this.dialog.open(SignupModalComponent, {
            width: '750px',
            height: '700px',
            panelClass: 'signup-modal-panel',
            disableClose: true
        });

        dialogRef.afterClosed().subscribe(res => {
            if (typeof res !== 'undefined' && res.buy) {

            }
        })
    }
}