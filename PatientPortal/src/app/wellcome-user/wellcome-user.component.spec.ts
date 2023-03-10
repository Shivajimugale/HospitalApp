import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellcomeUserComponent } from './wellcome-user.component';

describe('WellcomeUserComponent', () => {
  let component: WellcomeUserComponent;
  let fixture: ComponentFixture<WellcomeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellcomeUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WellcomeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
