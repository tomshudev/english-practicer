import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateRemoveDialogComponent } from './validate-remove-dialog.component';

describe('ValidateRemoveDialogComponent', () => {
  let component: ValidateRemoveDialogComponent;
  let fixture: ComponentFixture<ValidateRemoveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateRemoveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateRemoveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
