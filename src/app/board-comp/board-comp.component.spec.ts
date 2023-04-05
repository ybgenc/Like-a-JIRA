import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCompComponent } from './board-comp.component';

describe('BoardCompComponent', () => {
  let component: BoardCompComponent;
  let fixture: ComponentFixture<BoardCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
