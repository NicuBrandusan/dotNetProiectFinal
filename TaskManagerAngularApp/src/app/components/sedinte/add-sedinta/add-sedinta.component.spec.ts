import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSedintaComponent } from './add-sedinta.component';

describe('AddSedintaComponent', () => {
  let component: AddSedintaComponent;
  let fixture: ComponentFixture<AddSedintaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSedintaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSedintaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
