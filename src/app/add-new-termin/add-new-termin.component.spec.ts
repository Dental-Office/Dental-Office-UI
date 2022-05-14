import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTerminComponent } from './add-new-termin.component';

describe('AddNewTerminComponent', () => {
  let component: AddNewTerminComponent;
  let fixture: ComponentFixture<AddNewTerminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewTerminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTerminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
