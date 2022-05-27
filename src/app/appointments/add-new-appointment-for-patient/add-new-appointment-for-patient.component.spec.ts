import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAppointmentForPatientComponent } from './add-new-appointment-for-patient.component';

describe('AddNewAppointmentForPatientComponent', () => {
  let component: AddNewAppointmentForPatientComponent;
  let fixture: ComponentFixture<AddNewAppointmentForPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewAppointmentForPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewAppointmentForPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
