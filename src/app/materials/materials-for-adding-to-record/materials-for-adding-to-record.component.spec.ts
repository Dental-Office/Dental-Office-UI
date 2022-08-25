import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsForAddingToRecordComponent } from './materials-for-adding-to-record.component';

describe('MaterialsForAddingToRecordComponent', () => {
  let component: MaterialsForAddingToRecordComponent;
  let fixture: ComponentFixture<MaterialsForAddingToRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialsForAddingToRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsForAddingToRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
