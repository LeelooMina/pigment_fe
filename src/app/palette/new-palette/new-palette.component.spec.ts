import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPaletteComponent } from './new-palette.component';

describe('NewPaletteComponent', () => {
  let component: NewPaletteComponent;
  let fixture: ComponentFixture<NewPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPaletteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
