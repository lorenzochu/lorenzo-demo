import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lorenzo-demo';
  formControl = new FormControl();

  submit() {
    this.formControl.markAllAsTouched();
    this.formControl.updateValueAndValidity();
  }
}
