import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWordDialogComponent } from './new-word-dialog.component';

describe('NewWordDialogComponent', () => {
  let component: NewWordDialogComponent;
  let fixture: ComponentFixture<NewWordDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWordDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
