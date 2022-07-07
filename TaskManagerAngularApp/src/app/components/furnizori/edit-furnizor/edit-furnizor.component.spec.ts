import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFurnizorComponent } from './edit-furnizor.component';

describe('EditFurnizorComponent', () => {
  let component: EditFurnizorComponent;
  let fixture: ComponentFixture<EditFurnizorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFurnizorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFurnizorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
