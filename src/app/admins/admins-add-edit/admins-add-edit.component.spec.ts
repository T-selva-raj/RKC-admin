import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsAddEditComponent } from './admins-add-edit.component';

describe('AdminsAddEditComponent', () => {
  let component: AdminsAddEditComponent;
  let fixture: ComponentFixture<AdminsAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminsAddEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
