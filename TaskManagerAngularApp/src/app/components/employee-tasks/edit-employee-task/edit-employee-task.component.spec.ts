import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeTaskComponent } from './edit-employee-task.component';

describe('EditEmployeeTaskComponent', () => {
  let component: EditEmployeeTaskComponent;
  let fixture: ComponentFixture<EditEmployeeTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployeeTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeeTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
