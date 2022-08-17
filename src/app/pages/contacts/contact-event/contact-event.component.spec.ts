import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEventComponent } from './contact-event.component';

describe('ContactEventComponent', () => {
  let component: ContactEventComponent;
  let fixture: ComponentFixture<ContactEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
