import { Component, OnInit } from '@angular/core';
import { CustomerUploadCsvService } from './customer-upload-csv.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-upload-csv',
  templateUrl: './customer-upload-csv.component.html',
  styleUrls: ['./customer-upload-csv.component.css']
})
export class CustomerUploadCsvComponent implements OnInit {
  
  customers : Customer[];

  columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];

  constructor(customerUploadCsvService: CustomerUploadCsvService) { 
    customerUploadCsvService.getCustomers().subscribe(customers => this.customers = customers);
  }

  ngOnInit(): void {    
    
  }

}
