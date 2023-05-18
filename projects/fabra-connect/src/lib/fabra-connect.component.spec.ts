import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabraConnectComponent } from './fabra-connect.component';

describe('FabraConnectComponent', () => {
  let component: FabraConnectComponent;
  let fixture: ComponentFixture<FabraConnectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FabraConnectComponent]
    });
    fixture = TestBed.createComponent(FabraConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
