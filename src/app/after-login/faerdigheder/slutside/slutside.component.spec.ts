import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlutsideComponent } from './slutside.component';

describe('SlutsideComponent', () => {
  let component: SlutsideComponent;
  let fixture: ComponentFixture<SlutsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlutsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
