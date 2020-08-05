import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSnapshotchangesComponent } from './list-snapshotchanges.component';

describe('ListSnapshotchangesComponent', () => {
  let component: ListSnapshotchangesComponent;
  let fixture: ComponentFixture<ListSnapshotchangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSnapshotchangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSnapshotchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
