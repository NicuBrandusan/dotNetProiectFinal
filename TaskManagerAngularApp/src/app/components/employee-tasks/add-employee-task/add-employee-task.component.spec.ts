import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeTaskComponent } from './add-employee-task.component';

describe('AddEmployeeTaskComponent', () => {
  let component: AddEmployeeTaskComponent;
  let fixture: ComponentFixture<AddEmployeeTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
