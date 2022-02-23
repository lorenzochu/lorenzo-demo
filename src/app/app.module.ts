import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { InputExpansionDirective } from './directive-demo/input-expansion.directive';
import { ControlValueAccessorDemoComponent } from './control-value-accessor-demo/control-value-accessor-demo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveDemoComponent,
    InputExpansionDirective,
    ControlValueAccessorDemoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
