import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfRecordsComponent } from './list-of-records.component';

describe('ListOfRecordsComponent', () => {
  let component: ListOfRecordsComponent;
  let fixture: ComponentFixture<ListOfRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
