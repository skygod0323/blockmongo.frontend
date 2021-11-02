import {Component} from '@angular/core';
import {SettingsService} from "./services/setting.service";
import {Api} from "./services/api.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(public setting: SettingsService, public api: Api) {
        this.initApp();
    }

    initApp() {
        this.api.getCountries({}).subscribe(res => {
            console.log(res);
            if (res.success) {
                this.setting.countries = res.data;
            }
        })
    }
}
