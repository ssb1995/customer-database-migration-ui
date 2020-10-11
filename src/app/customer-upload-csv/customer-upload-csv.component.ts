import { Component, OnInit } from '@angular/core';
import { CustomerUploadCsvService } from './customer-upload-csv.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-upload-csv',
  templateUrl: './customer-upload-csv.component.html',
  styleUrls: ['./customer-upload-csv.component.css']
})
export class CustomerUploadCsvComponent implements OnInit {

  customers: Customer[];

  columnDefs = [
    { field: 'username', resizable: true },
    { field: 'firstName', resizable: true },
    { field: 'lastName', resizable: true },
    { field: 'email', resizable: true },
    { field: 'address', resizable: true }
  ];

  rowData: Customer[];
  customerPostData: Customer[];

  customerUploadCsvService: any;


  csvContent: string;
  parsedCsv: string[][];

  isHeaderMismatch: any = false;

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

  // public changeListener(files: FileList){
  //   console.log(files);
  //   if(files && files.length > 0) {
  //      let file : File = files.item(0); 
  //        console.log(file.name);
  //        console.log(file.size);
  //        console.log(file.type);
  //        let reader: FileReader = new FileReader();
  //        reader.readAsText(file);
  //        reader.onload = (e) => {
  //           let csv: string = reader.result as string;
  //           console.log(csv);
  //        }
  //     }
  // }

  onFileSelect(input: HTMLInputElement) {

    const files = input.files;

    //this.isHeaderMismatch = false;

    if (files && files.length) {

      console.log("Filename: " + files[0].name);
      console.log("Type: " + files[0].type);
      console.log("Size: " + files[0].size + " bytes");


      const fileToRead = files[0];
      const fileReader = new FileReader();

      fileReader.readAsText(fileToRead, "UTF-8");
      fileReader.onload = () => {
        let csvData = fileReader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        console.log(csvRecordsArray);
        const headers = csvRecordsArray[0].split(',');
        console.log(csvRecordsArray[0]);
        if (headers[0] !== 'User Name' || headers[1] !== 'First Name' || headers[2] !== 'Last Name' || headers[3] !== 'Email'
          || headers[4] !== 'Password' || headers[5] !== 'Address') {
          this.isHeaderMismatch = true;
          console.log(this.isHeaderMismatch);
        }else{
          this.isHeaderMismatch = false;

          // for(let i = 0; i < csvRecordsArray.length; i++){

          //   let tempJson={
          //     username: csvRecordsArray[i].username;
          //   };
            
            
          // }

          this.customerPostData.push();

        }
      };
    }
  }

}
