/**
 * Created by ApolloYr on 4/4/2018.
 */

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AfterViewInit, Component, Inject, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SettingsService} from "../../../services/setting.service";
import {Validate} from "../../../services/validate.service";
import {Api} from "../../../services/api.service";
import {NotifyService} from "../../../services/notify.service";

declare var $: any;
@Component({
    selector   : 'signup-modal',
    templateUrl: 'signup-modal.component.html',
    styleUrls: ['./signup-modal.component.scss']
})
export class SignupModalComponent implements OnInit, AfterViewInit {

    step = 1;
    emailSent = false;

    personalForm: FormGroup;
    contactForm: FormGroup;

    info = {
        firstName: '',
        middleName: '',
        lastName: '',
        birthday: '04/20/2018',
        preferredCurrency: '',
        username: '',
        password: '',
        repeatPassword: '',
        country: '',
        nationality: '',
        address1: '',
        address2: '',
        telephone: '',
        email: ''
    };

    constructor(
        public dialogRef: MatDialogRef<SignupModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public setting: SettingsService,
        public formBuilder: FormBuilder,
        public validate: Validate,
        public api: Api,
        public notify: NotifyService,
    )
    {

    }

    ngAfterViewInit() {
        // $('#datePicker').datepicker({
        //         format: 'mm/dd/yyyy'
        //     });
    }

    ngOnInit() {
        this.personalForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            middleName: [''],
            lastName: ['', Validators.required],
            birthday: ['', Validators.required],
            preferredCurrency: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', Validators.required],
            repeatPassword: ['', Validators.required],
        })

        this.contactForm = this.formBuilder.group({
            country: ['', Validators.required],
            nationality: ['', Validators.required],
            address1: ['', Validators.required],
            address2: [''],
            telephone: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        })
    }

    submitPersonalInfo() {

        console.log(this.info);

        if (!this.personalForm.valid) {
            this.notify.showNotification('warn', 'Fill all the required fields');

            this.validate.validateAllFormFields(this.personalForm);
            return;
        }

        if (this.info.password != this.info.repeatPassword) {
            this.notify.showNotification('warn', "password doesn't match");
            return;
        }

        if (this.info.password.length < 8) {
            this.notify.showNotification('warn', 'password must be include more than 8 characters');
            return;
        }

        this.setting.loading = true;
        this.api.submitPersonalInfo(this.info).subscribe(res => {
            this.setting.loading = false;

            if (res.success) {
                this.step = 2;
            } else {
                this.notify.showNotification('warn', res.msg);
            }
        })
    }

    submitContactInfo() {
        console.log(this.info);

        if (!this.contactForm.valid) {
            this.notify.showNotification('warn', 'Fill all the required fields');

            this.validate.validateAllFormFields(this.contactForm);
            return;
        }

        this.setting.loading = true;
        this.api.submitContactInfo(this.info).subscribe(res => {
            this.setting.loading = false;

            if (res.success) {
                this.step = 3;
            } else {
                this.notify.showNotification('warn', res.msg);
            }
        })
    }

    createAccount() {

        this.setting.loading = true;
        this.api.createAccount(this.info).subscribe(res => {

            this.setting.loading = false;

            console.log(res);
            this.emailSent = true;
        })
    }

    close() {
        this.dialogRef.close();
    }


}