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
    { field: 'username', resizable: true},
    { field: 'firstName', resizable: true },
    { field: 'lastName', resizable: true },
    { field: 'email', resizable: true },
    { field: 'address', resizable: true }
];

rowData : Customer[];

customerUploadCsvService: any;

  constructor(customerUploadCsvService: CustomerUploadCsvService) { 
    this.customerUploadCsvService = customerUploadCsvService;
  }

  ngOnInit(): void { 
    this.getCustomerDetails(); 
  }

  getCustomerDetails(): void {
    this.customerUploadCsvService.getCustomers().subscribe(customers => 
      this.rowData = customers
      );
  }

}
