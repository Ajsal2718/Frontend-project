import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrdctsComponent } from './edit-prdcts.component';

describe('EditPrdctsComponent', () => {
  let component: EditPrdctsComponent;
  let fixture: ComponentFixture<EditPrdctsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPrdctsComponent]
    });
    fixture = TestBed.createComponent(EditPrdctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
