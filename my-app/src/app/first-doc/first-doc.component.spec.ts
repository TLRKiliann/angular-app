import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDocComponent } from './first-doc.component';

describe('FirstDocComponent', () => {
  let component: FirstDocComponent;
  let fixture: ComponentFixture<FirstDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
