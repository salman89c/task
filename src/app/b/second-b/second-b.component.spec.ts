import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondBComponent } from './second-b.component';

describe('SecondBComponent', () => {
  let component: SecondBComponent;
  let fixture: ComponentFixture<SecondBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
