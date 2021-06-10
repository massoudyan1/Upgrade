import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaerdighederComponent } from './faerdigheder.component';

describe('FaerdighederComponent', () => {
  let component: FaerdighederComponent;
  let fixture: ComponentFixture<FaerdighederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaerdighederComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaerdighederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
