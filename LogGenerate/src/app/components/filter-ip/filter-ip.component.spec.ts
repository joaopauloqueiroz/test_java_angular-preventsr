import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterIpComponent } from './filter-ip.component';

describe('FilterIpComponent', () => {
  let component: FilterIpComponent;
  let fixture: ComponentFixture<FilterIpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterIpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
