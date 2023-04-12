import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaletteComponent } from './update-palette.component';

describe('UpdatePaletteComponent', () => {
  let component: UpdatePaletteComponent;
  let fixture: ComponentFixture<UpdatePaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePaletteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
