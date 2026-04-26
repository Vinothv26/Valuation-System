import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMaker } from './report-maker';

describe('ReportMaker', () => {
  let component: ReportMaker;
  let fixture: ComponentFixture<ReportMaker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportMaker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportMaker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
