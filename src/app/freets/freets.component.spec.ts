import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreetsComponent } from './freets.component';

describe('FreetsComponent', () => {
  let component: FreetsComponent;
  let fixture: ComponentFixture<FreetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
