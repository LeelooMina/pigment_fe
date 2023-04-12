import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPaletteComponent } from './show-palette.component';

describe('ShowPaletteComponent', () => {
  let component: ShowPaletteComponent;
  let fixture: ComponentFixture<ShowPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPaletteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
