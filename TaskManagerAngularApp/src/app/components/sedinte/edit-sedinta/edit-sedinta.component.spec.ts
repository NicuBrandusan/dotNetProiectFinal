import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSedintaComponent } from './edit-sedinta.component';

describe('EditSedintaComponent', () => {
  let component: EditSedintaComponent;
  let fixture: ComponentFixture<EditSedintaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSedintaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSedintaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
