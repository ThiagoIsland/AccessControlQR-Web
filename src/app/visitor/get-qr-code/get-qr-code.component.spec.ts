import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQrCodeComponent } from './get-qr-code.component';

describe('GetQrCodeComponent', () => {
  let component: GetQrCodeComponent;
  let fixture: ComponentFixture<GetQrCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetQrCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
