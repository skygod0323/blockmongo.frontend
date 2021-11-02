import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from "./material.module";
import {SignupModalComponent} from "./modal/signup-modal/signup-modal.component";
import {OwlDateTimeModule, OwlNativeDateTimeModule} from "ng-pick-datetime";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        SignupModalComponent
    ],
    entryComponents: [
        SignupModalComponent
    ],
    declarations: [
        SignupModalComponent
    ]
})

// https://github.com/ocombe/ng2-translate/issues/209
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}
