import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkGraphicComponent } from './mark-graphic.component';

describe('MarkGraphicComponent', () => {
  let component: MarkGraphicComponent;
  let fixture: ComponentFixture<MarkGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
