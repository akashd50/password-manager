import { NgModule } from '@angular/core';
import {TextInputComponent} from "./text-input/text-input.component";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {NumberInputComponent} from "./number-input/number-input.component";

@NgModule({
    declarations: [
        TextInputComponent,
        NumberInputComponent
    ],
    imports: [
        MatInputModule,
        ReactiveFormsModule
    ],
    exports: [TextInputComponent, NumberInputComponent]
})
export class InputsModule { }
