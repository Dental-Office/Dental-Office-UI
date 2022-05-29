import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfAppointmentsComponent } from './list-of-appointments.component';

describe('ListOfAppointmentsComponent', () => {
  let component: ListOfAppointmentsComponent;
  let fixture: ComponentFixture<ListOfAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
