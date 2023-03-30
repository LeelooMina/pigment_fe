import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PigmentsComponent } from './pigments.component';

describe('PigmentsComponent', () => {
  let component: PigmentsComponent;
  let fixture: ComponentFixture<PigmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PigmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PigmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
