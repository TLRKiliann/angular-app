import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFaceComponent } from './single-face.component';

describe('SingleFaceComponent', () => {
  let component: SingleFaceComponent;
  let fixture: ComponentFixture<SingleFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleFaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
