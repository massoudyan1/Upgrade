import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnkeltComponent } from './enkelt.component';

describe('EnkeltComponent', () => {
  let component: EnkeltComponent;
  let fixture: ComponentFixture<EnkeltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnkeltComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnkeltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
