import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersAddEditComponent } from './managers-add-edit.component';

describe('ManagersAddEditComponent', () => {
  let component: ManagersAddEditComponent;
  let fixture: ComponentFixture<ManagersAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagersAddEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagersAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
