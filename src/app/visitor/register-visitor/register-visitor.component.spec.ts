import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVisitorComponent } from './register-visitor.component';

describe('RegisterVisitorComponent', () => {
  let component: RegisterVisitorComponent;
  let fixture: ComponentFixture<RegisterVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterVisitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
