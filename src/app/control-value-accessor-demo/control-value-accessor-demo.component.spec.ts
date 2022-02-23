import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlValueAccessorDemoComponent } from './control-value-accessor-demo.component';

describe('ControlValueAccessorDemoComponent', () => {
  let component: ControlValueAccessorDemoComponent;
  let fixture: ComponentFixture<ControlValueAccessorDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlValueAccessorDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlValueAccessorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
