import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CustomerUploadCsvService } from './customer-upload-csv/customer-upload-csv.service';

import { AppComponent } from './app.component';
import { CustomerUploadCsvComponent } from './customer-upload-csv/customer-upload-csv.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    CustomerUploadCsvComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    HttpClientModule
  ],
  providers: [CustomerUploadCsvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
