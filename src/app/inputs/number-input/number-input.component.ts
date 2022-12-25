import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Subscription} from "rxjs";
import {InputFieldEvent, InputFieldType} from "../types";

@Component({
  selector: 'number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent implements OnInit, OnDestroy {
    @Input() id: string;
    @Input() title: string;
    @Input() placeholder: string;
    @Output() onUpdate = new EventEmitter<InputFieldEvent>();

    formControl: FormControl;
    subscription: Subscription = new Subscription();
    constructor() { }

    ngOnInit(): void {
        this.formControl = new FormControl(0);
        this.subscription.add(
            this.formControl.valueChanges.subscribe(newValue => {
                this.onUpdate.emit({
                    fieldId: this.id,
                    type: InputFieldType.NumberInput,
                    value: newValue
                });
            }))
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
