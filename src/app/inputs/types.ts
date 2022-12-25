export enum InputFieldType {
    NumberInput,
    TextInput
}

export interface InputFieldEvent {
    fieldId: string;
    type: InputFieldType;
    value: number | string;
}
