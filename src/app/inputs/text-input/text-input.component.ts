import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Subscription} from "rxjs";
import {InputFieldEvent, InputFieldType} from "../types";

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit, OnDestroy {
    @Input() id: string;
    @Input() title: string;
    @Input() placeholder: string;
    @Output() onUpdate = new EventEmitter<InputFieldEvent>();

    formControl: FormControl;
    subscription: Subscription = new Subscription();
    constructor() { }

    ngOnInit(): void {
        this.formControl = new FormControl("");
        this.subscription.add(
            this.formControl.valueChanges.subscribe(newValue => {
                this.onUpdate.emit({
                    fieldId: this.id,
                    type: InputFieldType.TextInput,
                    value: newValue
                });
            }))
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
