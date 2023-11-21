import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondAComponent } from './second-a.component';

describe('SecondAComponent', () => {
  let component: SecondAComponent;
  let fixture: ComponentFixture<SecondAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
