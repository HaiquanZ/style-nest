import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleAreaComponent } from './double-area.component';

describe('DoubleAreaComponent', () => {
  let component: DoubleAreaComponent;
  let fixture: ComponentFixture<DoubleAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
