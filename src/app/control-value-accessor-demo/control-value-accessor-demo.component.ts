import { Component, forwardRef, Input, OnChanges, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

const DEMO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ControlValueAccessorDemoComponent),
  multi: true
};

@Component({
  selector: 'app-control-value-accessor-demo',
  templateUrl: './control-value-accessor-demo.component.html',
  styleUrls: ['./control-value-accessor-demo.component.scss'],
  providers: [DEMO_VALUE_ACCESSOR]
})
export class ControlValueAccessorDemoComponent implements OnInit, OnChanges, ControlValueAccessor {

  @Input() data = [
    { key: 'A', value: 1, isSelect: false },
    { key: 'B', value: 2, isSelect: false },
    { key: 'C', value: 3, isSelect: false },
    { key: 'D', value: 4, isSelect: false },
    { key: 'E', value: 5, isSelect: false },
    { key: 'F', value: 6, isSelect: false },
    { key: 'G', value: 7, isSelect: false },
    { key: 'H', value: 8, isSelect: false },
    { key: 'I', value: 9, isSelect: false },
    { key: 'J', value: 10, isSelect: false },
    { key: 'K', value: 11, isSelect: false },
  ];

  formControl = new FormControl([]);

  onChange!: (value: any) => {};
  onTouched!: () => {};
  onValidatorChange!: () => {};

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

  }

  writeValue(value: any): void {
    this.formControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onOptionClick(option: { key: string, value: number, isSelect: boolean }) {
    option.isSelect = !option.isSelect;
    this.formControl.setValue(this.data.filter(x => x.isSelect).map(x => ({ key: x.key, value: x.value })));
    this.onChange(this.formControl.value);
  }
}
