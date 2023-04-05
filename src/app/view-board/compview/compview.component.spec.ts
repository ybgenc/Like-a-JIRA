import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompviewComponent } from './compview.component';

describe('CompviewComponent', () => {
  let component: CompviewComponent;
  let fixture: ComponentFixture<CompviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
