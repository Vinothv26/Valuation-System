import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiteEngineer } from './site-engineer';
describe('SiteEngineer', () => {
  let component: SiteEngineer;
  let fixture: ComponentFixture<SiteEngineer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteEngineer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteEngineer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
