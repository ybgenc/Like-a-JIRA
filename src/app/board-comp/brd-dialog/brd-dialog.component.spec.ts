import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrdDialogComponent } from './brd-dialog.component';

describe('BrdDialogComponent', () => {
  let component: BrdDialogComponent;
  let fixture: ComponentFixture<BrdDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrdDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
