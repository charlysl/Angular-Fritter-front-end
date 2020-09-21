import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreetSearchComponent } from './freet-search.component';

describe('FreetSearchComponent', () => {
  let component: FreetSearchComponent;
  let fixture: ComponentFixture<FreetSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreetSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreetSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
