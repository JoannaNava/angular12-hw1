import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUpdateDialogComponent } from './table-update-dialog.component';

describe('TableUpdateDialogComponent', () => {
  let component: TableUpdateDialogComponent;
  let fixture: ComponentFixture<TableUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableUpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
