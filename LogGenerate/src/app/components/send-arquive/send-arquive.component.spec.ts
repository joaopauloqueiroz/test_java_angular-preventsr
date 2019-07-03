import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendArquiveComponent } from './send-arquive.component';

describe('SendArquiveComponent', () => {
  let component: SendArquiveComponent;
  let fixture: ComponentFixture<SendArquiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendArquiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendArquiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
