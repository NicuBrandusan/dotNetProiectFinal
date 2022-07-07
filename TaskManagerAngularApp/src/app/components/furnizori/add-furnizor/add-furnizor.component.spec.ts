import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFurnizorComponent } from './add-furnizor.component';

describe('AddFurnizorComponent', () => {
  let component: AddFurnizorComponent;
  let fixture: ComponentFixture<AddFurnizorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFurnizorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFurnizorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
