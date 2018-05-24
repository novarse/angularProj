import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRolloverActivityComponent } from './image-rollover-activity.component';

describe('ImageRolloverActivityComponent', () => {
  let component: ImageRolloverActivityComponent;
  let fixture: ComponentFixture<ImageRolloverActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageRolloverActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageRolloverActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
