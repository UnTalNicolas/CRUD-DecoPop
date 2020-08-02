import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpproductComponent } from './upproduct.component';

describe('UpproductComponent', () => {
  let component: UpproductComponent;
  let fixture: ComponentFixture<UpproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
