import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFreetComponent } from './new-freet.component';

describe('NewFreetComponent', () => {
  let component: NewFreetComponent;
  let fixture: ComponentFixture<NewFreetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFreetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
