import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfMaterialsComponent } from './list-of-materials.component';

describe('ListOfMaterialsComponent', () => {
  let component: ListOfMaterialsComponent;
  let fixture: ComponentFixture<ListOfMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
