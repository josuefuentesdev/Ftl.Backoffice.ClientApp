import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLogoutComponent } from './custom-logout.component';

describe('CustomLogoutComponent', () => {
  let component: CustomLogoutComponent;
  let fixture: ComponentFixture<CustomLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomLogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
