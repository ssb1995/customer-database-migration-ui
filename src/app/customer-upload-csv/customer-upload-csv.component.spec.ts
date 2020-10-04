import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUploadCsvComponent } from './customer-upload-csv.component';

describe('CustomerUploadCsvComponent', () => {
  let component: CustomerUploadCsvComponent;
  let fixture: ComponentFixture<CustomerUploadCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerUploadCsvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerUploadCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
