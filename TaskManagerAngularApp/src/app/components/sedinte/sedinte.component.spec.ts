import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedinteComponent } from './sedinte.component';

describe('SedinteComponent', () => {
  let component: SedinteComponent;
  let fixture: ComponentFixture<SedinteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedinteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SedinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
