import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFreetComponent } from './edit-freet.component';

describe('EditFreetComponent', () => {
  let component: EditFreetComponent;
  let fixture: ComponentFixture<EditFreetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFreetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
