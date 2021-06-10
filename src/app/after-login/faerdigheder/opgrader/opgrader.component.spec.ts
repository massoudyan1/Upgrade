import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpgraderComponent } from './opgrader.component';

describe('OpgraderComponent', () => {
  let component: OpgraderComponent;
  let fixture: ComponentFixture<OpgraderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpgraderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpgraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
