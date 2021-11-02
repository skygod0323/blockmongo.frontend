/**
 * Created by ApolloYr on 1/28/2018.
 */

import {Injectable} from '@angular/core';
import 'rxjs/add/operator/catch';
import {SettingsService} from './setting.service';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'
import {NotifyService} from "./notify.service";

@Injectable()
export class Api {
    constructor(private http: HttpClient,
                private router: Router,
                public settings: SettingsService,
                public notify: NotifyService
    ) {
    }

    createAuthorizationHeader() {
        return new HttpHeaders().set('Authorization', 'Bearer ' + this.settings.getStorage('token'));
    }

    get(url, data?) {
        let headers = this.createAuthorizationHeader();

        return this.http.get(this.settings.apiUrl + url, {
            headers: headers,
            params: data
        }).map(res => res).catch((error: any) => this.handleError(this, error));
    }

    post(url, data) {
        let headers = this.createAuthorizationHeader();

        return this.http.post(this.settings.apiUrl + url, data, {
            headers
        }).map(res => res).catch((error: any) => this.handleError(this, error));
    }

    put(url, data) {
        let headers = this.createAuthorizationHeader();

        return this.http.put(this.settings.apiUrl + url, data, {
            headers: headers
        }).map(res => res).catch((error: any) => this.handleError(this, error));
    }


    handleError(_parent, error: any) {
        // if ((error.status == 401 || error.status == 400) && error.url && !error.url.endsWith('/login')) {
        //     console.log('unauthorized');
        //     if (_parent.settings) _parent.settings.setStorage('token', false);
        //     if (_parent.settings) _parent.settings.setAppSetting('is_loggedin', false);
        //     _parent.router.navigate(['/']);
        // }
        // In a real world app, you might use a remote logging infrastructure

        this.settings.loading = false;
        this.notify.showNotification('error', 'server error')

        return Observable.throw(error);
    }

    getCountries(data) {
        return this.get('/users/getCountries', data);
    }

    submitPersonalInfo(data) {
        return this.post('/users/submitPersonalInfo', data);
    }

    submitContactInfo(data) {
        return this.post('/users/submitContactInfo', data);
    }

    createAccount(data) {
        return this.post('/users/createAccount', data);
    }
}
