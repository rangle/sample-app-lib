import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleAppLibComponent } from './sample-app-lib.component';

describe('SampleAppLibComponent', () => {
  let component: SampleAppLibComponent;
  let fixture: ComponentFixture<SampleAppLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleAppLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleAppLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
