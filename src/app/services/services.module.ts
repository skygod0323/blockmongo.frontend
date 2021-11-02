/**
 * Created by ApolloYr on 2/5/2018.
 */
import {NgModule} from '@angular/core';
import {SettingsService} from "./setting.service";
import {Api} from "./api.service";
import {AuthGuard} from "./authguard.service";
import {NotifyService} from "./notify.service";
import {Validate} from "./validate.service";
import {MessageService} from 'primeng/components/common/messageservice';

@NgModule({
    imports: [

    ],
    declarations: [],
    providers: [
        SettingsService,
        Api,
        AuthGuard,
        NotifyService,
        Validate,
        MessageService,
    ],
    exports: [

    ]
})
export class ServicesModule {

}
