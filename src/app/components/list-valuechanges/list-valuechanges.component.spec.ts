import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListValuechangesComponent } from './list-valuechanges.component';

describe('ListValuechangesComponent', () => {
  let component: ListValuechangesComponent;
  let fixture: ComponentFixture<ListValuechangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListValuechangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListValuechangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
