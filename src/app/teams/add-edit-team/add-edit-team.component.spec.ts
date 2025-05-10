import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTeamComponent } from './add-edit-team.component';

describe('AddEditTeamComponent', () => {
  let component: AddEditTeamComponent;
  let fixture: ComponentFixture<AddEditTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
