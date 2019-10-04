import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindOfProfessionComponent } from './kind-of-profession.component';

describe('KindOfProfessionComponent', () => {
  let component: KindOfProfessionComponent;
  let fixture: ComponentFixture<KindOfProfessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindOfProfessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindOfProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
